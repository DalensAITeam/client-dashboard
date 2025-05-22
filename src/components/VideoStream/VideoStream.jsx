"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import PropTypes from "prop-types"
import VideoStreamError from './VideoStreamError'

const VideoStream = ({
  videoUrl,
  title,
  className = "",
  onStreamError,
  quality,
  autoPlay = true,
  muted = true,
  controls = false,
  loop = true,
  onStatusChange
}) => {
  const videoRef = useRef(null);
  const retryTimeoutRef = useRef(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  const handleStreamError = useCallback((type, message) => {
    setError({ type, message });
    setIsLoading(false);
    onStreamError?.(message);
    onStatusChange?.('error');

    // Auto retry for network errors
    if (type === 'network' && retryCount < maxRetries) {
      retryTimeoutRef.current = setTimeout(() => {
        handleRetry();
      }, Math.min(1000 * Math.pow(2, retryCount), 10000)); // Exponential backoff
    }
  }, [onStreamError, onStatusChange, retryCount]);

  const handleRetry = useCallback(() => {
    setError(null);
    setIsLoading(true);
    setRetryCount(prev => prev + 1);
    onStatusChange?.('connecting');

    const video = videoRef.current;
    if (video) {
      video.load();
    }
  }, [onStatusChange]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = (e) => {
      console.error('Video stream error:', e.target.error);
      
      // Categorize error
      const error = e.target.error;
      if (error.code === error.MEDIA_ERR_NETWORK) {
        handleStreamError('network', 'Network error occurred while loading video');
      } else if (error.code === error.MEDIA_ERR_DECODE) {
        handleStreamError('camera', 'Could not decode the video stream');
      } else if (error.code === error.MEDIA_ERR_SRC_NOT_SUPPORTED) {
        handleStreamError('server', 'Video stream format not supported');
      } else {
        handleStreamError('unknown', 'An unexpected error occurred');
      }
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
      onStatusChange?.('connecting');
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      setError(null);
      setRetryCount(0);
      onStatusChange?.('connected');
    };
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('stalled', () => handleStreamError('network', 'Stream stalled'));
    video.addEventListener('suspend', () => handleStreamError('network', 'Stream suspended'));
    video.addEventListener('waiting', () => onStatusChange?.('connecting'));
    video.addEventListener('playing', () => onStatusChange?.('connected'));

    // Set video source
    video.src = videoUrl;
    video.load();

    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('stalled', () => handleStreamError('network', 'Stream stalled'));
      video.removeEventListener('suspend', () => handleStreamError('network', 'Stream suspended'));
      video.removeEventListener('waiting', () => onStatusChange?.('connecting'));
      video.removeEventListener('playing', () => onStatusChange?.('connected'));
      video.pause();
      video.src = '';
    };
  }, [videoUrl, handleStreamError, handleRetry, onStatusChange]);

  if (error) {
    return (
      <VideoStreamError
        type={error.type}
        message={error.message}
        onRetry={retryCount < maxRetries ? handleRetry : undefined}
        streamName={title}
        className={className}
      />
    );
  }
  return (
    <div className={`relative w-full h-full bg-black ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        autoPlay={autoPlay}
        muted={muted}
        controls={controls}
        loop={loop}
        playsInline
        title={title}
      />
    </div>
  );
};

VideoStream.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  onStreamError: PropTypes.func,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool
};

export default VideoStream;
