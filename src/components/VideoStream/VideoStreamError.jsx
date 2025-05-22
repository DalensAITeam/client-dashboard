import React from 'react';
import { FiRefreshCw, FiWifi, FiCamera, FiServer } from 'react-icons/fi';

export const VideoStreamError = ({ 
  type = 'unknown',
  message,
  onRetry,
  streamName,
  className = '' 
}) => {
  const getErrorIcon = () => {
    switch (type) {
      case 'network':
        return <FiWifi className="w-8 h-8" />;
      case 'camera':
        return <FiCamera className="w-8 h-8" />;
      case 'server':
        return <FiServer className="w-8 h-8" />;
      default:
        return <FiRefreshCw className="w-8 h-8" />;
    }
  };

  const getErrorMessage = () => {
    if (message) return message;

    switch (type) {
      case 'network':
        return 'Network connection error. Please check your internet connection.';
      case 'camera':
        return 'Camera connection failed. Please verify the camera is connected and active.';
      case 'server':
        return 'Server error. Please try again later or contact support.';
      default:
        return 'Failed to load video stream. Please try again.';
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full h-full bg-gray-900 ${className}`}>
      <div className="text-gray-400 mb-4">
        {getErrorIcon()}
      </div>
      <div className="text-center space-y-2 max-w-sm mx-auto px-4">
        <h3 className="text-white text-lg font-medium">
          {streamName ? `${streamName} - Connection Error` : 'Connection Error'}
        </h3>
        <p className="text-gray-400 text-sm">
          {getErrorMessage()}
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md
                   transition-colors flex items-center space-x-2"
        >
          <FiRefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};

export default VideoStreamError;
