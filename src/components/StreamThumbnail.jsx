import React, { useCallback, useMemo } from 'react';
import OptimizedVideoPlayer from './OptimizedVideoPlayer';
import { useVideoOptimizer } from '../utils/videoOptimizer';

const StreamThumbnail = ({
  id,
  name,
  streamUrl,
  isActive = false,
  animalCount = 0,
  status = 'idle',
  onClick,
  className = '',
  style = {},
}) => {
  const { isHardwareAccelerated } = useVideoOptimizer(streamUrl, {
    isActive: false,
    quality: 'PREVIEW',
  });

  const statusColors = useMemo(
    () => ({
      active: 'bg-green-500',
      inactive: 'bg-gray-400',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      idle: 'bg-blue-500',
    }),
    []
  );

  const statusColor = statusColors[status] || statusColors.inactive;
  const isStreamActive = status === 'active';

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (onClick) {
        onClick(id);
      }
    },
    [id, onClick]
  );

  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-md transition-all duration-200 ${
        isActive ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
      } ${className}`}
      style={style}
      onClick={handleClick}
    >
      <div className="relative aspect-video bg-gray-100">
        <OptimizedVideoPlayer
          src={streamUrl}
          isActive={isActive}
          quality="PREVIEW"
          className={`transition-opacity duration-300 ${
            isStreamActive ? 'opacity-100' : 'opacity-70'
          }`}
          style={{
            transform: isHardwareAccelerated ? 'translateZ(0)' : 'none',
          }}
          playsInline
          muted
        />
        
        {/* Status indicator */}
        <div className="absolute top-2 left-2 flex items-center">
          <div
            className={`w-3 h-3 rounded-full ${statusColor} mr-1`}
            title={status.charAt(0).toUpperCase() + status.slice(1)}
          />
          {animalCount > 0 && (
            <div className="bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
              {animalCount} {animalCount === 1 ? 'animal' : 'animals'}
            </div>
          )}
        </div>
        
        {/* Camera name overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <h3 className="text-white text-sm font-medium truncate">{name}</h3>
        </div>
        
        {/* Click-to-activate overlay */}
        {!isActive && (
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white/90 text-gray-800 text-xs font-medium px-2 py-1 rounded">
              View Live
            </span>
          </div>
        )}
      </div>
      
      {/* Performance indicator (for debugging) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 right-2 text-xs bg-black/60 text-white px-1.5 py-0.5 rounded">
          {isHardwareAccelerated ? 'GPU' : 'CPU'}
        </div>
      )}
    </div>
  );
};

export default React.memo(StreamThumbnail);
