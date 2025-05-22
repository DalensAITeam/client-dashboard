import React from 'react';
import { Visibility, GridView } from '@mui/icons-material';

const ViewToggleIcons = ({ isLiveView, onChange }) => {
  return (
    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
      <button
        onClick={() => onChange(false)}
        className={`p-2 rounded-full transition-all ${
          !isLiveView
            ? 'text-gray-400 hover:text-white hover:bg-white/10'
            : 'text-white bg-white/20'
        }`}
        title="Live View"
      >
        <Visibility className="w-6 h-6" />
      </button>
      <button
        onClick={() => onChange(true)}
        className={`p-2 rounded-full transition-all ${
          isLiveView
            ? 'text-gray-400 hover:text-white hover:bg-white/10'
            : 'text-white bg-white/20'
        }`}
        title="Category View"
      >
        <GridView className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ViewToggleIcons;
