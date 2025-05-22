import React, { useEffect, useRef, useState } from 'react';
import { useVideoOptimizer, useIntersectionObserver } from '../utils/videoOptimizer';

const OptimizedVideoPlayer = ({
  src,
  isActive = false,
  quality = 'PREVIEW',
  className = '',
  style = {},
  onLoadStart = () => {},
  onLoadedData = () => {},
  onError = () => {},
  onPlay = () => {},
  onPause = () => {},
  ...props
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useIntersectionObserver(containerRef, { threshold: 0.1 });
  
  const { url: optimizedUrl, isHardwareAccelerated } = useVideoOptimizer(src, {
    isActive,
    quality: isActive ? 'HD' : quality,
  });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Handle video element events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleCanPlay = () => {
      setIsLoading(false);
      onLoadedData();
    };
    
    const handleError = (e) => {
      console.error('Video error:', e);
      setHasError(true);
      onError(e);
    };
    
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    
    // Auto-play when visible and active
    if (isVisible && isActive) {
      video.play().catch(e => {
        console.warn('Auto-play failed:', e);
        // Fallback to click-to-play
        video.muted = true;
      });
    }
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      
      // Pause video when unmounting or becoming inactive
      if (!video.paused) {
        video.pause();
      }
    };
  }, [isVisible, isActive, onLoadedData, onError]);
  
  // Handle URL changes
  useEffect(() => {
    if (!videoRef.current) return;
    
    setIsLoading(true);
    onLoadStart();
    
    // Only update source if it's different to avoid unnecessary reloads
    if (videoRef.current.src !== optimizedUrl) {
      videoRef.current.src = optimizedUrl;
      
      // For HLS/DASH streams, we might need to reattach the media source
      if (optimizedUrl.includes('m3u8') || optimizedUrl.includes('mpd')) {
        const mediaSource = new MediaSource();
        const objectUrl = URL.createObjectURL(mediaSource);
        videoRef.current.src = objectUrl;
        
        mediaSource.addEventListener('sourceopen', () => {
          // Initialize your media source here (e.g., for HLS.js or dash.js)
        });
      }
    }
    
    // Cleanup function
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      }
    };
  }, [optimizedUrl, onLoadStart]);
  
  // Handle play/pause based on visibility and active state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isVisible && isActive) {
      video.play().catch(e => {
        console.warn('Auto-play failed:', e);
        // Fallback to click-to-play
        video.muted = true;
      });
      setIsPlaying(true);
      onPlay();
    } else {
      video.pause();
      setIsPlaying(false);
      onPause();
    }
  }, [isVisible, isActive, onPlay, onPause]);
  
  // Add hardware acceleration class if supported
  const videoClassName = [
    'w-full h-full object-contain',
    isHardwareAccelerated ? 'transform-gpu' : '',
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <div 
      ref={containerRef}
      className={`relative ${isLoading ? 'bg-gray-100' : ''}`}
      style={style}
    >
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center p-4">
            <FiWifi className="w-8 h-8 mx-auto mb-3 text-red-500" />
            <h3 className="text-lg font-medium mb-2">Stream Error</h3>
            <p className="text-sm text-gray-400 mb-4">
              {error?.message || 'Failed to load video stream'}
            </p>
            {retryCount < 3 && (
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 
                         transition-colors flex items-center mx-auto"
              >
                <FiRefreshCw className="w-4 h-4 mr-2" /> Retry Connection
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className={videoClassName}
            playsInline
            muted={!isActive}
            preload={isActive ? 'auto' : 'metadata'}
            disablePictureInPicture
            {...props}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(OptimizedVideoPlayer);
