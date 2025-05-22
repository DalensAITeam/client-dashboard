import React, { useState, useEffect } from 'react';
import { 
  FiVideo, 
  FiGrid, 
  FiRefreshCw,
  FiMaximize2,
  FiMinimize2
} from 'react-icons/fi';
import VideoFrame from '../../../components/VideoFrame/VideoFrame';
import ViewToggle from '../../../components/ViewToggle/ViewToggle';
import { cameraService } from '../../../services/cameraService';

// Constants
const ViewModes = {
  LIVE: 'live',
  CATEGORY: 'category'
};

// Main LiveView Component
const LiveView = ({ cameras, selectedCamera, onSelectCamera, quality }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Add any refresh logic here
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  const activeCameraData = cameras.find(cam => cam.id === selectedCamera) || cameras[0];

  return (
    <div className="h-full flex">
      {/* Sidebar with camera list */}
      <div className="w-64 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-3 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-gray-700 font-medium text-sm uppercase tracking-wider">Cameras</h3>
          <button
            onClick={handleRefresh}
            className="p-1.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            disabled={isRefreshing}
          >
            <FiRefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
        
        <div className="p-2 space-y-2">
          {cameras.map(camera => (
            <button
              key={camera.id}
              onClick={() => onSelectCamera(camera.id)}
              className={`w-full p-2 rounded-lg transition-all ${
                selectedCamera === camera.id 
                  ? 'bg-blue-50 ring-1 ring-blue-500'
                  : 'hover:bg-gray-50'
              }`}
            >
              <VideoFrame
                streamUrl={camera.streamUrl}
                title={camera.name}
                status={camera.status}
                isActive={selectedCamera === camera.id}
                showControls={false}
                aspectRatio="aspect-video"
                className="mb-2"
                cameraId={camera.id}
                animalType={camera.type || 'default'}
              />
              <div className="flex items-center justify-between px-1">
                <span className="text-sm text-gray-700 truncate">{camera.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main video area - white background with only stream area in black */}
      <div className="flex-1 bg-white p-4">
        <div className="h-full bg-black rounded-lg overflow-hidden">
          {activeCameraData ? (
            <VideoFrame
              streamUrl={activeCameraData.streamUrl}
              title={activeCameraData.name}
              status={activeCameraData.status}
              isActive={true}
              quality={quality}
              showControls={true}
              className="w-full h-full"
              cameraId={activeCameraData.id}
              animalType={activeCameraData.type || 'default'}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <FiVideo className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p>No camera selected</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Category View Component
const CategoryView = ({ cameras, onSelectCamera }) => {
  return (
    <div className="h-full overflow-hidden">
      <div className="h-full p-4 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {cameras.map(camera => (
            <VideoFrame
              key={camera.id}
              streamUrl={camera.streamUrl}
              title={camera.name}
              status={camera.status}
              isActive={false}
              showControls={true}
              onSelect={() => onSelectCamera(camera.id)}
              className="w-full"
              cameraId={camera.id}
              animalType={camera.type || 'default'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// EnhancedLiveView wrapper component
const EnhancedLiveView = () => {
  const [viewMode, setViewMode] = useState(() => {
    const savedMode = localStorage.getItem('farmMonitorViewMode');
    return savedMode || ViewModes.LIVE;
  });
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [quality, setQuality] = useState('HIGH');
  const [cameras, setCameras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load cameras and initialize WebSocket connection
  useEffect(() => {
    const loadCameras = async () => {
      try {
        setIsLoading(true);
        // Initialize WebSocket connection for real-time updates
        cameraService.connect();
        
        // Define available camera streams using strictly animal-related YouTube videos
        const availableCameras = [
          { id: 'chick-1', name: 'Chicken Coop 1', type: 'chicken', streamUrl: 'https://www.youtube.com/embed/ST5DlR-iV60?autoplay=1&mute=1&controls=0' },
          { id: 'chick-2', name: 'Chicken Coop 2', type: 'chicken', streamUrl: 'https://www.youtube.com/embed/gqsMTZQ-pmE?autoplay=1&mute=1&controls=0' },
          { id: 'cow-1', name: 'Cattle Barn 1', type: 'cow', streamUrl: 'https://www.youtube.com/embed/huT5__BqY_U?autoplay=1&mute=1&controls=0' },
          { id: 'cow-2', name: 'Cattle Barn 2', type: 'cow', streamUrl: 'https://www.youtube.com/embed/LQRAfJyEsko?start=15&autoplay=1&mute=1&controls=0' },
          { id: 'pig-1', name: 'Pig Pen 1', type: 'pig', streamUrl: 'https://www.youtube.com/embed/R_uLvnMgB-c?autoplay=1&mute=1&controls=0' },
          { id: 'goat-1', name: 'Goat Area', type: 'goat', streamUrl: 'https://www.youtube.com/embed/RN50R3gycgo?autoplay=1&mute=1&controls=0' },
          { id: 'sheep-1', name: 'Sheep Pasture', type: 'sheep', streamUrl: 'https://www.youtube.com/embed/D-aJfPYwt7c?autoplay=1&mute=1&controls=0' },
          { id: 'duck-1', name: 'Duck Pond', type: 'duck', streamUrl: 'https://www.youtube.com/embed/MtN1YnoL46Q?autoplay=1&mute=1&controls=0' }
        ];

        setCameras(availableCameras);
        
        // Auto-select first camera if none selected
        if (availableCameras.length > 0 && !selectedCamera) {
          setSelectedCamera(availableCameras[0].id);
          // Start processing for the first video
          const firstCamera = availableCameras[0];
        }

        // Set up real-time camera status updates
        cameraService.on('streamUpdate', (data) => {
          setCameras(prevCameras => {
            return prevCameras.map(camera => 
              camera.id === data.cameraId ? { 
                ...camera,
                status: data.status,
                streamUrl: data.streamUrl || camera.streamUrl
              } : camera
            );
          });
        });

        // Handle camera status changes
        cameraService.on('cameraStatus', (data) => {
          setCameras(prevCameras => {
            return prevCameras.map(camera => 
              camera.id === data.cameraId ? {
                ...camera,
                status: data.status,
                lastUpdate: new Date().toISOString()
              } : camera
            );
          });
        });

      } catch (error) {
        console.error('Error loading cameras:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCameras();

    // Cleanup WebSocket connection on unmount
    return () => {
      cameraService.disconnect();
    };
  }, [selectedCamera]);

  const handleSelectCamera = (cameraId) => {
    setSelectedCamera(cameraId);
  };

  const handleViewModeToggle = (mode) => {
    setViewMode(mode);
    localStorage.setItem('farmMonitorViewMode', mode);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full bg-white">
        <div className="animate-pulse text-gray-500">Loading cameras...</div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header with view toggle - centered */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            {viewMode === ViewModes.LIVE ? 'Live View' : 'Category View'}
          </h2>
          <ViewToggle
            viewMode={viewMode}
            onToggle={handleViewModeToggle}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        {viewMode === ViewModes.LIVE ? (
          <LiveView
            cameras={cameras}
            selectedCamera={selectedCamera}
            onSelectCamera={handleSelectCamera}
            quality={quality}
          />
        ) : (
          <CategoryView
            cameras={cameras}
            onSelectCamera={handleSelectCamera}
          />
        )}
      </div>
    </div>
  );
};

export default EnhancedLiveView;
