"use client";

import React, { useState, useEffect, useRef } from 'react';
import { socket } from '../../../../socket/socket';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import styles from './NewLiveView.module.css';

// Icons
const StatusIndicator = ({ isOnline }) => (
  <span className={`${styles.statusDot} ${isOnline ? styles.online : styles.offline}`} />
);

const ZoomInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
  </svg>
);

const ZoomOutIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM7 10h6" />
  </svg>
);

const FlipIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const BACKEND_URL = 'http://localhost:7017';

const NewLiveView = () => {
  // State for available streams and current selection
  const [streams, setStreams] = useState([]);
  const [selectedStream, setSelectedStream] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [connectionError, setConnectionError] = useState(null);
  
  // Stream control states
  const [isConnected, setIsConnected] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Refs
  const videoRef = useRef(null);
  const socketRef = useRef(null);

  // Fetch available streams
  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/videos`);
        if (!response.ok) throw new Error('Failed to fetch streams');
        
        const data = await response.json();
        const availableStreams = data.videos.map((video, index) => ({
          id: `stream-${index}`,
          name: video.split('.')[0].replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          type: video.split('-')[0].toLowerCase(),
          url: `${BACKEND_URL}/api/video_stream/${video}`,
          thumbnail: `${BACKEND_URL}/api/thumbnail/${video}`,
          status: 'online'
        }));
        
        setStreams(availableStreams);
        if (!selectedStream && availableStreams.length > 0) {
          setSelectedStream(availableStreams[0]);
        }
      } catch (error) {
        console.error('Error fetching streams:', error);
        // Fallback to local video files
        const fallbackStreams = [
          { 
            id: 'local-1',
            name: 'Livestock Area',
            type: 'livestock',
            url: '/videos/livestock.mp4',
            status: 'online'
          },
          { 
            id: 'local-2',
            name: 'Chicken Coop',
            type: 'chicks',
            url: '/videos/chicks.mp4',
            status: 'online'
          },
          { 
            id: 'local-3',
            name: 'Pig Pen',
            type: 'pigs',
            url: '/videos/pigs.mp4',
            status: 'online'
          }
        ];
        setStreams(fallbackStreams);
        if (!selectedStream) setSelectedStream(fallbackStreams[0]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStreams();
  }, []);

  // Handle stream selection
  const handleStreamSelect = (stream) => {
    setIsLoading(true);
    setSelectedStream(stream);
    setIsConnected(false);
    setConnectionError(null);
    setZoomLevel(1);
    setIsFlipped(false);
  };

  // Connect to socket for live updates
  useEffect(() => {
    if (!selectedStream) return;

    socketRef.current = io(BACKEND_URL, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 3,
      timeout: 10000
    });

    socketRef.current.on('connect', () => {
      setIsConnected(true);
      setIsLoading(false);
    });

    socketRef.current.on('disconnect', () => {
      setIsConnected(false);
    });

    socketRef.current.on('error', (error) => {
      setConnectionError('Failed to connect to video stream');
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [selectedStream]);

  // Handle zoom controls
  const handleZoom = (direction) => {
    setZoomLevel(current => {
      const newLevel = direction === 'in' ? current + 0.1 : current - 0.1;
      return Math.min(Math.max(newLevel, 1), 2);
    });
  };

  return (
    <div className={styles.container}>
      {/* Left panel - Available Streams */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h3 className={styles.sidebarTitle}>Available Streams</h3>
          <span className={styles.streamCount}>{streams.length} Active</span>
        </div>
        
        <div className={styles.streamList}>
          {streams.map(stream => (
            <div
              key={stream.id}
              className={`${styles.streamItem} ${selectedStream?.id === stream.id ? styles.selected : ''}`}
              onClick={() => handleStreamSelect(stream)}
            >
              <div className={styles.streamPreview}>
                {stream.thumbnail ? (
                  <img src={stream.thumbnail} alt={stream.name} className={styles.thumbnail} />
                ) : (
                  <div className={styles.placeholderThumbnail}>
                    <span>{stream.name[0]}</span>
                  </div>
                )}
              </div>
              <div className={styles.streamInfo}>
                <h4 className={styles.streamName}>{stream.name}</h4>
                <div className={styles.streamMeta}>
                  <StatusIndicator isOnline={stream.status === 'online'} />
                  <span className={styles.streamType}>{stream.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel - Active Stream */}
      <div className={styles.mainContent}>
        {selectedStream ? (
          <div className={styles.activeStream}>
            <div className={styles.streamHeader}>
              <div className={styles.streamTitle}>
                <h2>{selectedStream.name}</h2>
                <div className={styles.streamStatus}>
                  <StatusIndicator isOnline={isConnected} />
                  <span>{isConnected ? 'Live' : isLoading ? 'Connecting...' : 'Offline'}</span>
                </div>
              </div>
              <div className={styles.streamControls}>
                <button
                  className={styles.controlButton}
                  onClick={() => handleZoom('out')}
                  disabled={zoomLevel <= 1}
                >
                  <ZoomOutIcon />
                </button>
                <button
                  className={styles.controlButton}
                  onClick={() => handleZoom('in')}
                  disabled={zoomLevel >= 2}
                >
                  <ZoomInIcon />
                </button>
                <button
                  className={styles.controlButton}
                  onClick={() => setIsFlipped(prev => !prev)}
                >
                  <FlipIcon />
                </button>
              </div>
            </div>

            <div className={styles.videoContainer}>
              {isLoading ? (
                <div className={styles.loadingState}>
                  <div className={styles.loadingSpinner} />
                  <p className={styles.loadingText}>
                    Connecting to {selectedStream.name}...
                  </p>
                  {connectionError && (
                    <p className={styles.errorText}>{connectionError}</p>
                  )}
                </div>
              ) : (
                <div
                  className={styles.videoWrapper}
                  style={{
                    transform: `scale(${zoomLevel}) ${isFlipped ? 'scaleX(-1)' : 'none'}`,
                  }}
                >
                  <VideoPlayer
                    videoUrl={selectedStream.url}
                    videoRef={videoRef}
                    className={styles.video}
                    onError={() => setConnectionError('Failed to load video stream')}
                    aspectRatio="16/9"
                    controls={false}
                    autoPlay
                    muted
                    playsInline
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.noStream}>
            <h3>No Stream Selected</h3>
            <p>Select a stream from the sidebar to begin monitoring</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewLiveView;
