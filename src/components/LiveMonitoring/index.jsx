import React, { useState, useEffect } from 'react';
import { socketService } from '../../socket/socketService';

const VIDEO_OPTIONS = [
  { id: 1, name: 'Chicks Sample 1', filename: 'chick-1.mp4', animal: 'chicken' },
  { id: 2, name: 'Chicks Sample 2', filename: 'chick-2.mp4', animal: 'chicken' },
  { id: 3, name: 'Cows Sample 1', filename: 'cow-1.mp4', animal: 'cow' },
  { id: 4, name: 'Cows Sample 2', filename: 'cow-2.mp4', animal: 'cow' },
  { id: 5, name: 'Pigs Sample 1', filename: 'pigs-1.mp4', animal: 'pig' },
  { id: 6, name: 'Pigs Sample 2', filename: 'pigs-2.mp4', animal: 'pig' },
  { id: 7, name: 'Goat Sample', filename: 'goat.mp4', animal: 'goat' },
  { id: 8, name: 'Livestock Overview', filename: 'livestock.mp4', animal: 'mixed' }
];

const LiveMonitoring = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [frame, setFrame] = useState(null);
  const [metrics, setMetrics] = useState({
    threatState: '',
    animalCount: 0
  });

  useEffect(() => {
    if (!isStreaming) return;

    const socket = socketService.connect();

    socket.on('frame_update', (base64Frame) => {
      setFrame(`data:image/jpeg;base64,${base64Frame}`);
    });

    socket.on('detection_update', (data) => {
      const detection = data.text[0];
      const threatState = detection.match(/Animal_Threat_State: ([^,]+)/)[1].trim();
      const animalCount = parseInt(detection.match(/Animal_number: (\d+)/)[1]);
      
      setMetrics({
        threatState,
        animalCount
      });
    });

    return () => {
      socketService.disconnect();
      setIsStreaming(false);
    };
  }, [isStreaming]);

  const handleVideoSelect = async (video) => {
    const formData = new FormData();
    formData.append('file', video.filename);
    formData.append('animal_name', video.animal);

    try {
      const response = await fetch('http://localhost:7017/video_feed', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSelectedVideo(video);
        setIsStreaming(true);
      }
    } catch (error) {
      console.error('Error starting video stream:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
      <div className="lg:col-span-3">
        <div className="relative rounded-lg overflow-hidden bg-gray-900 aspect-video shadow-xl">
          {frame ? (
            <img 
              src={frame} 
              alt="Live Stream" 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-white text-lg">
                {isStreaming ? 'Loading stream...' : 'Select a video feed to begin'}
              </p>
            </div>
          )}
          
          {isStreaming && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
              <div className="flex justify-between items-center text-white">
                <div className="flex items-center space-x-2">
                  <span>Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    metrics.threatState === 'Normal' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {metrics.threatState || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Animals Detected:</span>
                  <span className="font-semibold">{metrics.animalCount}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Available Feeds</h3>
          <div className="space-y-2">
            {VIDEO_OPTIONS.map(video => (
              <button
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                className={`w-full p-3 rounded-lg text-left transition ${
                  selectedVideo?.id === video.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <div className="font-medium">{video.name}</div>
                <div className="text-sm opacity-75">Type: {video.animal}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
