import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { FiRefreshCw, FiMaximize2, FiMinimize2, FiVolume2, FiVolumeX } from "react-icons/fi";
import VideoFrame from "../../../../../components/VideoFrame/VideoFrame";
import "./QuickMonitoring.css";

const QuickMonitoring = () => {
  const cameraIpAddress = useSelector((state) => state.actions.ipAddress);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [streamStatus, setStreamStatus] = useState('connecting');
  
  // Use the local Flask backend for video streaming
  // Get the backend URL from the current origin (localhost during development)
  const backendBaseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://dalensai.onrender.com' 
    : window.location.protocol + '//' + window.location.hostname + ':7017';
  
  // State for video management
  const [videoName, setVideoName] = useState('chick-1.mp4'); // Default to a known video file
  const [availableVideos, setAvailableVideos] = useState([]);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  
  // Use the direct video endpoint for better performance
  // Using /api/video/ instead of /api/video_stream/ to avoid connection timeouts
  const baseStreamUrl = `${backendBaseUrl}/api/video/${videoName}?t=${Date.now()}`; // Add cache busting
  const fallbackImageUrl = `${backendBaseUrl}/api/videos`;
  
  console.log('Using video stream URL:', baseStreamUrl);
  
  // Fetch available videos when component mounts
  useEffect(() => {
    console.log('Fetching available videos from:', `${backendBaseUrl}/api/videos`);
    fetch(`${backendBaseUrl}/api/videos`)
      .then(response => response.json())
      .then(data => {
        if (data.success && data.videos && data.videos.length > 0) {
          console.log('Available videos:', data.videos);
          setAvailableVideos(data.videos);
          
          // Select a random video from the available ones
          const randomIndex = Math.floor(Math.random() * data.videos.length);
          setSelectedVideoIndex(randomIndex);
          setVideoName(data.videos[randomIndex]);
        }
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, [backendBaseUrl]);
  
  // Function to change to the next video
  const nextVideo = useCallback(() => {
    if (availableVideos.length === 0) return;
    
    const nextIndex = (selectedVideoIndex + 1) % availableVideos.length;
    setSelectedVideoIndex(nextIndex);
    setVideoName(availableVideos[nextIndex]);
    setIsLoading(true);
    setStreamStatus('connecting');
  }, [availableVideos, selectedVideoIndex]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  const refreshStream = useCallback(() => {
    setHasError(false);
    setIsLoading(true);
    setStreamStatus('connecting');
  }, []);

  const handleError = useCallback((error) => {
    console.error('Video stream error:', error);
    setHasError(true);
    setIsLoading(false);
    setStreamStatus('error');
  }, []);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    setStreamStatus('connecting');
  }, []);

  const handleLoadedData = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    setStreamStatus('connected');
  }, []);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className={`w-full h-full flex flex-col bg-white rounded-lg shadow-lg overflow-hidden ${
      isFullscreen ? 'fixed inset-0 z-50' : 'relative'
    }`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-gray-800">
              Quick Monitoring
            </h2>
            {availableVideos.length > 0 && (
              <select 
                className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white"
                value={videoName}
                onChange={(e) => {
                  setVideoName(e.target.value);
                  setIsLoading(true);
                  setStreamStatus('connecting');
                }}
              >
                {availableVideos.map((video) => (
                  <option key={video} value={video}>
                    {video.replace('.mp4', '').replace('-', ' ')}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={nextVideo}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
              disabled={isLoading || availableVideos.length <= 1}
              title="Next video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                <line x1="19" y1="5" x2="19" y2="19"></line>
              </svg>
            </button>
            <button
              onClick={refreshStream}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
              disabled={isLoading}
              title="Refresh stream"
            >
              <FiRefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <FiVolumeX className="w-5 h-5" /> : <FiVolume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Video Container */}
      <div className="flex-1">
        <VideoFrame
          streamUrl={baseStreamUrl}
          title={`Camera ${cameraIpAddress[0]}`}
          status={streamStatus === 'connected' ? 'active' : streamStatus === 'error' ? 'offline' : 'connecting'}
          isActive={true}
          quality="HD"
          showControls={true}
          onFullscreenToggle={toggleFullscreen}
          className="w-full h-full"
          aspectRatio="aspect-[16/9]"
          onError={handleError}
          onLoadStart={handleLoadStart}
          onLoadedData={handleLoadedData}
        />

        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 p-4">
            <div className="text-center">
              <p className="text-red-500 mb-4">Failed to load video stream</p>
              <button
                onClick={refreshStream}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Retry
              </button>
            </div>
            <img 
              src={fallbackImageUrl} 
              alt="Fallback camera feed"
              className="mt-4 max-w-full max-h-[60vh] object-contain rounded"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/screen.png';
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(QuickMonitoring);
