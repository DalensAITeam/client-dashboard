import React from 'react';
import { FiGrid, FiVideo } from 'react-icons/fi';

const ViewToggle = ({ viewMode, onToggle, className = '' }) => {
  return (
    <div className={`flex items-center bg-gray-100 rounded-lg p-1 ${className}`}>
      <button
        onClick={() => onToggle('live')}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all ${
          viewMode === 'live'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <FiVideo className="mr-2" />
        Live View
      </button>
      <button
        onClick={() => onToggle('category')}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all ${
          viewMode === 'category'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <FiGrid className="mr-2" />
        Category View
      </button>
    </div>
  );
};

export default ViewToggle;
