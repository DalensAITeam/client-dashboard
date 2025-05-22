"use client"

import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

const VideoPlayer = ({
  videoUrl,
  title,
  className = "",
  onError,
  videoRefExternal, // External ref for video element to be used by parent components
  canvasRefExternal, // External ref for canvas element to be used by parent components
  aspectRatio = "16/9",
  controls = false,
  autoPlay = true,
  muted = true,
  playsInline = true
}) => {
  const videoRef = videoRefExternal || useRef(null);
  const containerRef = useRef(null);
  const canvasRef = canvasRefExternal || useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Check if the URL is likely a stream from our backend
  const isBackendStream = videoUrl && (videoUrl.includes('/api/video_feed/') || videoUrl.includes('/api/video_stream/'));

  const [streamLoaded, setStreamLoaded] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [detections, setDetections] = useState([]);
  const detectionInterval = useRef(null);

  // Function to capture and process frame for detection
  const processFrame = async () => {
    if (!canvasRef.current || !videoRef.current) return;
    
    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Set canvas dimensions to match video
      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
      }
      
      // Draw video frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Get image data and send for detection
      const imageData = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
      
      const response = await fetch('http://localhost:7017/api/detect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageData })
      });
      
      if (response.ok) {
        const data = await response.json();
        setDetections(data.detections || []);
      }
    } catch (error) {
      console.error('Error processing frame:', error);
    }
  };

  // Handle video stream with automatic recovery
  useEffect(() => {
    if (!isBackendStream || !containerRef.current) return;
    
    setStreamLoaded(false);
    setStreamError(false);
    
    let retryCount = 0;
    const maxRetries = 3;
    let retryTimeout = null;
    
    const createVideoElement = () => {
      let videoElement = videoRef.current;
      if (!videoElement) {
        videoElement = document.createElement('video');
        videoElement.className = 'w-full h-full object-contain';
        videoElement.playsInline = true;
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoRef.current = videoElement;
        containerRef.current.appendChild(videoElement);
      }
      return videoElement;
    };
    
    const retryConnection = () => {
      if (retryCount >= maxRetries) {
        setStreamError(true);
        return;
      }
      
      retryCount++;
      const backoffDelay = Math.min(1000 * Math.pow(2, retryCount), 10000);
      
      retryTimeout = setTimeout(() => {
        const videoElement = createVideoElement();
        videoElement.src = videoUrl;
        videoElement.load();
      }, backoffDelay);
    };
    
    const videoElement = createVideoElement();
    videoElement.src = videoUrl;
    
    const onLoadedData = () => {
      console.log('Video stream loaded');
      setStreamLoaded(true);
      retryCount = 0;
      
      // Start detection interval (every 2 seconds)
      detectionInterval.current = setInterval(processFrame, 2000);
    };
    
    const onError = (e) => {
      console.error('Error loading video stream:', e);
      const error = e.target.error;
      
      if (error.code === error.MEDIA_ERR_NETWORK) {
        console.log(`Retry attempt ${retryCount + 1}/${maxRetries}`);
        retryConnection();
      } else {
        setStreamError(true);
        if (onError) onError(e);
      }
    };
    
    const onStalled = () => {
      console.log('Stream stalled, attempting recovery...');
      retryConnection();
    };
    
    videoElement.addEventListener('loadeddata', onLoadedData);
    videoElement.addEventListener('error', onError);
    videoElement.addEventListener('stalled', onStalled);
    
    // Cleanup
    return () => {
      if (detectionInterval.current) {
        clearInterval(detectionInterval.current);
      }
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
      videoElement.removeEventListener('loadeddata', onLoadedData);
      videoElement.removeEventListener('error', onError);
      videoElement.removeEventListener('stalled', onStalled);
      videoElement.pause();
      videoElement.src = '';
      videoElement.load();
    };
  }, [isBackendStream, videoUrl, title]);
  
  // Reset stream state when URL changes
  useEffect(() => {
    if (isBackendStream) {
      setStreamLoaded(false);
      setStreamError(false);
    }
  }, [videoUrl, isBackendStream]);
  
  // Handle stream recovery
  const handleRetry = useCallback(() => {
    setStreamError(false);
    setStreamLoaded(false);
    
    if (videoRef.current) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
    }
  }, [videoUrl]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          src={videoUrl}
          autoPlay={autoPlay}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          onError={onError}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  onError: PropTypes.func,
  videoRefExternal: PropTypes.object, // External ref for video element
  canvasRefExternal: PropTypes.object, // External ref for canvas element
};

export default VideoPlayer;
