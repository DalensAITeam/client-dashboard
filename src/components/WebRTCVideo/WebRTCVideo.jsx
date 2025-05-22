import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { socket } from '../../socket/socket';

const WebRTCVideo = ({ 
  streamUrl, 
  className, 
  isMiniPreview = false,
  onStatusChange,
  quality = 'standard',
  onDetectionUpdate
}) => {
  const canvasRef = useRef();
  const socketRef = useRef();
  const [status, setStatus] = useState('connecting');
  const [detectionData, setDetectionData] = useState(null);
  
  const updateStatus = (newStatus) => {
    setStatus(newStatus);
    onStatusChange?.(newStatus);
  };

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const constraints = getQualityConstraints(quality);
      canvas.width = constraints.video.width.ideal;
      canvas.height = constraints.video.height.ideal;
    }
  }, [quality]);

  const getQualityConstraints = (quality) => {
    switch (quality) {
      case 'low':
        return {
          video: {
            width: { ideal: 640 },
            height: { ideal: 360 },
            frameRate: { max: 15 }
          }
        };
      case 'high':
        return {
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            frameRate: { max: 30 }
          }
        };
      default: // standard
        return {
          video: {
            width: { ideal: 854 },
            height: { ideal: 480 },
            frameRate: { max: 24 }
          }
        };
    }
  };

  const initializeSocketConnection = useCallback(() => {
    try {
      socketRef.current = socket;

      // Handle connection events
      socket.on('connect', () => {
        console.log('Connected to video server');
        updateStatus('connected');
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from video server');
        updateStatus('error');
      });

      // Handle frame updates
      socket.on('frame_update', (frameData) => {
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          const img = new Image();
          img.onload = () => {
            ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
          };
          img.src = `data:image/jpeg;base64,${frameData}`;
        }
      });

      // Handle detection updates
      socket.on('detection_update', (data) => {
        setDetectionData(data);
        onDetectionUpdate?.(data);
      });

      // Handle socket connection errors
      socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
        updateStatus('error');
      });

      socket.on('connect_timeout', () => {
        console.error('Socket connection timeout');
        updateStatus('error');
      });

      // Handle reconnection attempts
      socket.on('reconnecting', (attemptNumber) => {
        console.log(`Attempting to reconnect... (${attemptNumber})`);
        updateStatus('connecting');
      });

      socket.on('reconnect_failed', () => {
        console.error('Failed to reconnect');
        updateStatus('error');
      });

      // Start receiving frames for this stream
      socket.emit('start_stream', {
        streamUrl,
        quality: getQualityConstraints(quality)
      });

    } catch (error) {
      console.error('Error creating peer connection:', error);
      updateStatus('error');
    }
  }, [streamUrl, quality]);

  useEffect(() => {
    let isVisible = true;
    
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (!isVisible && socketRef.current) {
        socketRef.current.emit('stop_stream', { streamUrl });
        updateStatus('connecting');
      } else if (isVisible) {
        initializeSocketConnection();
      }
    };

    initializeSocketConnection();
    initializeCanvas();

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (socketRef.current) {
        socketRef.current.emit('stop_stream', { streamUrl });
        socketRef.current.disconnect();
      }
    };
  }, [streamUrl, initializeSocketConnection, initializeCanvas]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className={`${className} ${isMiniPreview ? 'object-cover' : 'object-contain'}`}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          backgroundColor: 'black'
        }}
      />

      {/* Status overlays */}
      {status === 'connecting' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-sm">Stream error</div>
        </div>
      )}

      {/* Detection data overlay */}
      {detectionData && !isMiniPreview && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70">
          <div className="text-white text-sm font-mono">
            {detectionData.text.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Add prop types
WebRTCVideo.propTypes = {
  streamUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  isMiniPreview: PropTypes.bool,
  onStatusChange: PropTypes.func,
  onDetectionUpdate: PropTypes.func,
  quality: PropTypes.oneOf(['low', 'standard', 'high'])
};

export default WebRTCVideo;
