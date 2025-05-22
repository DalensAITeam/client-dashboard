import React, { useState } from 'react';
import { FaPlay, FaPause, FaExpand, FaCog, FaCamera } from 'react-icons/fa';

function CameraContainer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCamera, setSelectedCamera] = useState('1');

  const cameras = [
    { id: '1', name: 'Front Yard Camera' },
    { id: '2', name: 'Back Yard Camera' },
    { id: '3', name: 'Side Entrance' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-medium text-gray-800">Camera Preview</h2>
            <select 
              className="rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
              value={selectedCamera}
              onChange={(e) => setSelectedCamera(e.target.value)}
            >
              {cameras.map(camera => (
                <option key={camera.id} value={camera.id}>
                  {camera.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
              <FaCamera />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
              <FaCog />
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="aspect-video bg-gray-900 flex items-center justify-center relative group">
          {/* This would be replaced with actual camera feed */}
          <div className="text-gray-400 flex flex-col items-center">
            <FaCamera size={48} className="mb-2" />
            <p>Camera feed will appear here</p>
          </div>
          
          {/* Video controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <div className="text-sm">Live</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <FaExpand />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Connected</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>Resolution: 1080p</span>
            <span>FPS: 30</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraContainer;
