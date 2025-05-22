import React, { memo, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FiMaximize2, FiMinimize2, FiRefreshCw, FiActivity } from 'react-icons/fi';
import WebRTCVideo from '../WebRTCVideo/WebRTCVideo';
import { useAnimalDetection } from '../../context/AnimalDetectionContext';

// Memoized video player to prevent unnecessary re-renders
const VideoPlayer = memo(({
  src,
  className,
  muted = true,
  autoPlay = true,
  loop = false,
  onLoad,
  onError,
  onPlay,
  playsInline = true,
  disablePictureInPicture = true,
  videoRef
}) => {
  const internalVideoRef = useRef(null);
  const actualVideoRef = videoRef || internalVideoRef;
  const mountedRef = useRef(true);
  const playPromiseRef = useRef(null);

  // Cleanup function when component unmounts
  useEffect(() => {
    return () => {
      mountedRef.current = false;
      // Safely pause video if there's an ongoing play promise
      if (actualVideoRef.current) {
        try {
          actualVideoRef.current.pause();
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    };
  }, [actualVideoRef]);

  // Handle video source changes
  useEffect(() => {
    // Don't try to load if no source is provided
    if (!src) return;

    // Clear any previous play promise
    playPromiseRef.current = null;

    if (actualVideoRef.current) {
      // Reset the video element
      try {
        actualVideoRef.current.pause();
        actualVideoRef.current.currentTime = 0;
        actualVideoRef.current.load();
      } catch (e) {
        console.log('Error resetting video:', e);
      }

      if (autoPlay) {
        // Use a longer delay to ensure the video is fully loaded
        const timer = setTimeout(() => {
          if (!mountedRef.current || !actualVideoRef.current) return;

          try {
            playPromiseRef.current = actualVideoRef.current.play();
            if (playPromiseRef.current !== undefined) {
              playPromiseRef.current.catch(e => {
                if (!mountedRef.current) return;

                // Only report non-abort errors
                if (e.name !== 'AbortError') {
                  console.error('Auto-play failed:', e);
                  if (onError) onError(e);
                }
              });
            }
          } catch (e) {
            console.error('Error during play attempt:', e);
          }
        }, 300);

        return () => clearTimeout(timer);
      }
    }
  }, [src, autoPlay, onError, actualVideoRef]);

  return (
    <video
      ref={actualVideoRef}
      className={className}
      src={src}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      playsInline={playsInline}
      disablePictureInPicture={disablePictureInPicture}
      onLoadedData={onLoad}
      onError={(e) => {
        // Filter out AbortError during unmount
        if (e.name !== 'AbortError' && onError) {
          console.error('Video error:', e);
          onError(e);
        }
      }}
      onPlay={onPlay}
      preload="auto"
      webkit-playsinline="true"
      x5-playsinline="true"
      crossOrigin="anonymous"
    />
  );
});

VideoPlayer.displayName = 'VideoPlayer';

VideoPlayer.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  onPlay: PropTypes.func,
  playsInline: PropTypes.bool,
  disablePictureInPicture: PropTypes.bool
};

function VideoFrame({
  streamUrl,
  title,
  status: initialStatus = 'active',
  isActive = false,
  onSelect,
  onFullscreenToggle,
  quality = 'high',
  className = '',
  showControls = true,
  aspectRatio = 'aspect-video',
  muted = true,
  onStatusChange,
  cameraId = 'default-camera',
  animalType = 'default'
}) {
  const isWebRTCStream = streamUrl?.startsWith('webrtc://');
  const {
    detectionData,
    streamStats,
    processingVideos,
    startDetection,
    stopDetection
  } = useAnimalDetection();

  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [streamStatus, setStreamStatus] = useState(initialStatus);
  const [retrying, setRetrying] = useState(false);
  const [videoKey, setVideoKey] = useState(Date.now());
  const mainVideoRef = useRef(null);
  const canvasRef = useRef(null);

  // Determine the stream type based on URL pattern
  const streamType = useMemo(() => {
    if (!streamUrl) return 'unknown';
    if (streamUrl.includes('webrtc://')) return 'webrtc';
    if (streamUrl.includes('rtsp://')) return 'rtsp';
    if (streamUrl.includes('youtube.com/embed')) return 'youtube';
    return 'external';
  }, [streamUrl]);

  const isProcessing = processingVideos && cameraId ? processingVideos.includes(cameraId) : false;
  const currentDetection = detectionData && cameraId ? detectionData[cameraId] || {} : {};
  const currentStats = streamStats && cameraId ? streamStats[cameraId] || {} : {};
  // Video reference is already declared as mainVideoRef

  // Add cache-busting to stream URL
  const streamUrlWithCacheBust = useMemo(() => {
    if (!streamUrl) return '';
    const separator = streamUrl.includes('?') ? '&' : '?';
    return `${streamUrl}${separator}t=${Date.now()}`;
  }, [streamUrl, videoKey]);

  // Determine if video processing should be enabled
  const shouldProcessVideo = useCallback(() => {
    // Only process if we have a valid stream URL and processing is not already in progress
    // Also check if the URL is from our backend to avoid processing external videos
    const isBackendUrl = streamUrl && (
      streamUrl.includes('/api/video_stream/') ||
      streamUrl.includes('/model/stream/')
    );
    return !isProcessing && streamUrl && streamUrl.length > 0 && isBackendUrl;
  }, [isProcessing, streamUrl]);

  const handleFullscreenToggle = async (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      await e.currentTarget.closest('.video-frame-container').requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
    if (onFullscreenToggle) {
      onFullscreenToggle(!isFullscreen);
    }
  };

  const handleStreamStatus = useCallback((status) => {
    setStreamStatus(status);
    onStatusChange?.(status);
  }, [onStatusChange]);

  const handleRetry = useCallback(() => {
    setRetrying(true);
    setStreamStatus('connecting');

    // Force video reload by updating the key
    setVideoKey(Date.now());

    // Start video processing if it's not already running
    if (!isProcessing && streamUrl) {
      // Generate a safe cameraId if none is provided
      const effectiveCameraId = cameraId || `cam-${Date.now()}`;
      const effectiveAnimalType = animalType || 'Chicken';

      const videoFile = new File([streamUrl], 'stream.mp4', { type: 'video/mp4' });
      startDetection(effectiveCameraId, videoFile, effectiveAnimalType)
        .then(result => {
          console.log('Detection started successfully:', result);
        })
        .catch(error => {
          console.error('Failed to notify backend:', error);
          setStreamStatus('error');
        });
    }

    const retryTimer = setTimeout(() => {
      setRetrying(false);
    }, 1000);

    return () => clearTimeout(retryTimer);
  }, [isProcessing, streamUrl, cameraId, animalType, startDetection]);

  const handleVideoLoad = useCallback(() => {
    if (!mainVideoRef.current) return;

    // Just notify backend about the new video
    startDetection(cameraId || `cam-${Date.now()}`, streamUrl, animalType)
      .catch(error => {
        console.error('Failed to notify backend:', error);
        setStreamStatus('error');
      });

    // Update status
    setStreamStatus('active');
    if (onStatusChange) onStatusChange('active');
  }, [streamUrl, cameraId, animalType, startDetection, onStatusChange]);

  const handleVideoError = useCallback((error) => {
    console.error('Video error:', error);
    setStreamStatus('error');
    if (onStatusChange) onStatusChange('error');
  }, [onStatusChange]);

  // Setup video detection for YouTube videos
  useEffect(() => {
    // Skip detection if not active
    if (!isActive) return;
    
    const effectiveAnimalType = animalType || 'Chicken';
    const effectiveCameraId = cameraId || `cam-${Date.now()}`;
    
    // Check if this is a YouTube video
    const isYouTubeVideo = streamUrl && streamUrl.includes('youtube.com');
    
    if (isYouTubeVideo) {
      console.log('Starting YouTube detection for:', effectiveCameraId, 'with type:', effectiveAnimalType);
      
      // Start detection with the YouTube URL directly
      startDetection(effectiveCameraId, streamUrl, effectiveAnimalType)
        .then(result => {
          console.log('YouTube detection started successfully:', result);
          setStreamStatus('active');
          if (onStatusChange) onStatusChange('active');
        })
        .catch(error => {
          console.error('Error starting YouTube detection:', error);
        });
    } else if (mainVideoRef.current) {
      // For regular videos
      console.log('Starting regular video detection for:', effectiveCameraId);
      
      // Start detection with the stream URL
      startDetection(effectiveCameraId, streamUrl, effectiveAnimalType)
        .then(result => {
          console.log('Detection started successfully:', result);
          setStreamStatus('active');
          if (onStatusChange) onStatusChange('active');
        })
        .catch(error => {
          console.error('Error starting detection:', error);
        });
    }
    
    // Cleanup function
    return () => {
      // Stop detection when component becomes inactive
      if (effectiveCameraId) {
        console.log('Stopping detection for:', effectiveCameraId);
        stopDetection(effectiveCameraId);
      }
    };
  }, [isActive, streamUrl, cameraId, animalType, startDetection, stopDetection, onStatusChange, mainVideoRef]);

  const getStatusColor = (status) => {
    if (isProcessing) return 'bg-blue-500 animate-pulse';

    switch (status) {
      case 'connected':
      case 'active': return 'bg-green-500';
      case 'connecting': return 'bg-yellow-500 animate-pulse';
      case 'error':
      case 'offline': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'connected':
      case 'active': return 'Live';
      case 'connecting': return 'Connecting...';
      case 'error': return 'Error';
      case 'offline': return 'Offline';
      default: return 'Connecting...';
    }
  };

  // Add timeout for connection attempts
  useEffect(() => {
    let timeoutId;

    if (streamStatus === 'connecting') {
      timeoutId = setTimeout(() => {
        // If we're still connecting after 5 seconds, try switching to direct video
        if (streamStatus === 'connecting') {
          console.log('Connection timeout for stream:', streamUrl);

          // For external URLs, just set to error state and let retry handle it
          if (streamUrl.includes('youtube.com')) {
            console.log('YouTube URL, setting to active state');
            setStreamStatus('active');
            if (onStatusChange) onStatusChange('active');
          } else {
            console.log('External URL, setting to error state for retry');
            setStreamStatus('error');
          }
        }
      }, 5000);

      return () => clearTimeout(timeoutId);
    }

    // If we get an error, try to recover after a short delay
    if (streamStatus === 'error') {
      const recoveryId = setTimeout(() => {
        console.log('Attempting to recover from error');
        setStreamStatus('connecting');
        if (mainVideoRef.current) {
          mainVideoRef.current.load();
        }
      }, 3000);

      return () => clearTimeout(recoveryId);
    }
  }, [streamStatus, streamUrl, onStatusChange, mainVideoRef]);

  // Add error boundary for video loading
  useEffect(() => {
    const handleVideoError = (error) => {
      console.error('Video loading error:', error);
      setStreamStatus('error');
      if (onStatusChange) {
        onStatusChange('error');
      }
    };

    const videoElement = document.querySelector(`[data-camera-id="${cameraId}"]`);
    if (videoElement) {
      videoElement.addEventListener('error', handleVideoError);
      return () => videoElement.removeEventListener('error', handleVideoError);
    }
  }, [cameraId, onStatusChange]);

  // Return loading state while connecting
  if (streamStatus === 'connecting') {
    return (
      <div className={`video-frame-container relative ${aspectRatio} ${className} bg-gray-900`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mb-2"></div>
            <p className="text-sm">Connecting to stream...</p>
          </div>
        </div>
      </div>
    );
  }

  // Return error state if connection failed
  if (streamStatus === 'error') {
    return (
      <div className={`video-frame-container relative ${aspectRatio} ${className} bg-gray-900`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-sm mb-2">Connection failed</p>
            <button
              onClick={handleRetry}
              disabled={retrying}
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
            >
              {retrying ? 'Retrying...' : 'Retry'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // References for video and frame capture
  // Video and canvas refs are defined at the top of the component
  const captureIntervalRef = useRef(null);
  const mountedRef = useRef(true);

  // Function to capture frames from video for detection
  const captureVideoFrame = useCallback(() => {
    if (!mainVideoRef.current || !canvasRef.current || !shouldProcessVideo()) return null;

    const video = mainVideoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to blob
    return new Promise(resolve => {
      canvas.toBlob(blob => {
        if (!blob) {
          console.error('Failed to capture frame');
          resolve(null);
          return;
        }
        resolve(blob);
      }, 'image/jpeg', 0.8); // 80% quality JPEG
    });
  }, [shouldProcessVideo]);

  // Setup frame capture interval for detection
  useEffect(() => {
    if (!isProcessing && shouldProcessVideo() && mainVideoRef.current) {
      console.log('Setting up frame capture interval for detection');

      // Clear any existing interval
      if (captureIntervalRef.current) {
        clearInterval(captureIntervalRef.current);
      }

      // Start a new capture interval
      captureIntervalRef.current = setInterval(async () => {
        if (!mountedRef.current) return;

        try {
          const frameBlob = await captureVideoFrame();
          if (!frameBlob) return;

          // Generate a safe cameraId if none is provided
          const effectiveCameraId = cameraId || `cam-${Date.now()}`;
          const effectiveAnimalType = animalType || 'Chicken';

          // Process the captured frame for detection
          console.log('Sending frame for detection');
          const formData = new FormData();
          formData.append('frame', frameBlob, 'frame.jpg');
          formData.append('camera_id', effectiveCameraId);
          formData.append('animal_type', effectiveAnimalType);

          // Send the frame to the backend for detection
          // This is a simulated call that would normally go to the backend
          startDetection(effectiveCameraId, frameBlob, effectiveAnimalType)
            .then(result => {
              console.log('Detection result:', result);
            })
            .catch(error => {
              console.error('Error during detection:', error);
            });
        } catch (error) {
          console.error('Error capturing frame:', error);
        }
      }, 500); // Capture every 500ms

      return () => {
        if (captureIntervalRef.current) {
          clearInterval(captureIntervalRef.current);
          captureIntervalRef.current = null;
        }
      };
    }
  }, [isProcessing, shouldProcessVideo, captureVideoFrame, startDetection, cameraId, animalType]);

  // Note: Video name extraction is now done directly in handleVideoLoad to avoid initialization errors
  // Stream type is defined at the top of the component

  // Render the video component based on type
  const renderVideo = useCallback(() => {
    // Use WebRTC for live streams if available
    if (streamType === 'webrtc') {
      return (
        <WebRTCVideo
          streamUrl={streamUrl}
          className={`w-full h-full ${aspectRatio}`}
          onError={(e) => {
            console.error('Video error:', e);
            setStreamStatus('error');
          }}
          onLoad={handleVideoLoad}
        />
      );
    }

    // For YouTube videos, use iframe
    if (streamType === 'youtube') {
      // Set stream status to active immediately for YouTube videos
      setTimeout(() => {
        setStreamStatus('active');
        if (onStatusChange) onStatusChange('active');
      }, 500);
      
      return (
        <iframe
          src={streamUrl}
          className={`w-full h-full ${aspectRatio}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => {
            console.log('YouTube video loaded');
            handleVideoLoad();
          }}
          onError={(e) => {
            console.error('YouTube error:', e);
            setStreamStatus('error');
          }}
        />
      );
    }

    // For MJPEG streams, use img tag
    if (streamType === 'mjpeg') {
      return (
        <img
          src={streamUrl}
          className={`w-full h-full object-cover ${aspectRatio}`}
          onLoad={handleVideoLoad}
          onError={(e) => {
            console.error('MJPEG stream error:', e);
            setStreamStatus('error');
          }}
          alt="Live video stream"
        />
      );
    }

    // For direct video playback from backend
    // Convert from /api/video_stream/ to /api/video/ for direct file access if needed
    const directVideoUrl = streamType === 'direct' ? streamUrl :
      streamUrl && streamUrl.includes('/api/video_stream/')
        ? streamUrl.replace('/api/video_stream/', '/api/video/')
        : streamUrl;

    console.log('Using direct video URL:', directVideoUrl);

    // Use standard video player with optimized settings
    return (
      <>
        <video
          ref={mainVideoRef}
          key={videoKey}
          src={directVideoUrl}
          className={`w-full h-full object-cover ${aspectRatio}`}
          muted={muted}
          autoPlay
          loop
          playsInline
          crossOrigin="anonymous"
          controls={showControls}
          onLoadedData={handleVideoLoad}
          onError={(e) => {
            console.error('Video error:', e);
            setStreamStatus('error');
          }}
          onPlay={() => {
            console.log('Video playback started');
            setStreamStatus('active');
          }}
        />
      {/* Hidden canvas for frame capture */}
      <canvas
        ref={canvasRef}
        style={{ display: 'none' }}
        width="640"
        height="480"
      />
    </>
  );
}, [streamUrl, videoKey, aspectRatio, muted, handleVideoLoad]);

  // Main component return
  return (
  <div
    className={`relative ${aspectRatio} bg-black rounded-lg overflow-hidden group ${className} ${isActive ? 'ring-2 ring-blue-500' : ''}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={() => onSelect && onSelect()}
  >
    {/* Video container */}
    <div className="relative w-full h-full">
      {renderVideo()}

      {/* Detection overlay */}
      {currentDetection && currentDetection.detections && (
        <div className="absolute inset-0 pointer-events-none">
          {currentDetection.detections.slice(0, 8).map((det, idx) => { // Limit to 8 detections for performance
            if (!det.bbox || det.bbox.length !== 4) return null;

            const [x, y, width, height] = det.bbox;
            const confidence = det.confidence ? Math.round(det.confidence * 100) : 0;
            const label = det.class || 'object';

            return (
              <div
                key={`${cameraId}-${idx}`}
                className="absolute border-2 border-red-500 bg-red-500/20 flex items-end"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${width}%`,
                  height: `${height}%`,
                }}
              >
                <div className="bg-red-500 text-white text-xs px-1.5 py-0.5">
                  {label} {confidence}%
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Status indicator */}
      <div className={`absolute top-2 left-2 flex items-center space-x-2 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-75'}`}>
        <div className={`w-2 h-2 rounded-full ${streamStatus === 'active' ? 'bg-green-500' : streamStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
        <span className="text-xs text-white bg-black/60 px-2 py-0.5 rounded">
          {streamStatus === 'active' ? 'Live' :
            streamStatus === 'error' ? 'Error' : 'Connecting...'}
        </span>
      </div>

      {/* Title and controls */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-75'}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-white text-sm font-medium truncate">
            {title || 'Camera Feed'}
          </h3>

          {showControls && (
            <div className="flex space-x-2">
              {isProcessing && (
                <button
                  className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    stopDetection(cameraId);
                  }}
                  title="Stop Analysis"
                >
                  <FiActivity className="w-4 h-4" />
                </button>
              )}

              <button
                className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFullscreenToggle(e);
                }}
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? (
                  <FiMinimize2 className="w-4 h-4" />
                ) : (
                  <FiMaximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Stats overlay */}
        {currentStats && (
          <div className="mt-1 text-xs text-gray-300">
            {currentStats.fps && (
              <span className="mr-2">{Math.round(currentStats.fps)} FPS</span>
            )}
            {currentStats.bitrate && (
              <span>{(currentStats.bitrate / 1024).toFixed(1)} Mbps</span>
            )}
          </div>
        )}

        {/* Detection data */}
        {currentDetection && (
          <div className="flex items-center justify-between text-xs text-white mt-2">
            <span>Animals: {currentDetection.animalCount || 0}</span>
            <span className={`px-2 py-0.5 rounded ${currentDetection.threatState === 'Normal' ? 'bg-green-500/50' : 'bg-red-500/50'}`}>
              {currentDetection.threatState || 'Unknown'}
            </span>
          </div>
        )}
      </div>

      {/* Loading overlay */}
      {streamStatus === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  </div>
  );
}

VideoFrame.propTypes = {
  streamUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  status: PropTypes.oneOf(['active', 'connecting', 'error', 'offline']),
  isActive: PropTypes.bool,
  onSelect: PropTypes.func,
  onFullscreenToggle: PropTypes.func,
  quality: PropTypes.oneOf(['low', 'standard', 'high']),
  className: PropTypes.string,
  showControls: PropTypes.bool,
  aspectRatio: PropTypes.string,
  muted: PropTypes.bool,
  onStatusChange: PropTypes.func,
  cameraId: PropTypes.string,
  animalType: PropTypes.string
};

export default VideoFrame;
