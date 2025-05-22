import { io } from 'socket.io-client';
import { store } from '../Redux/store';
import { updateStreamStats } from '../Redux/ActionSlice';

// Create socket instance with metrics namespace
const socket = io('http://localhost:7017', {
    transports: ['websocket', 'polling'],  // Allow fallback to polling
    autoConnect: true,
    reconnectionDelayMax: 10000,
    reconnectionAttempts: 10,
    timeout: 20000
});

// Socket event listeners
socket.on('connect', () => {
    console.log('Socket connected');
    // Request initial metrics on connection
    socket.emit('get_metrics');
});

socket.on('disconnect', () => {
    console.log('Socket disconnected');
});

socket.on('error', (error) => {
    console.error('Socket error:', error);
});

// Listen for stats updates
socket.on('stats', (stats) => {
    // Calculate threat state based on attack count
    const threatState = stats.amount_attack > 5 ? 'danger' : 
                       stats.amount_attack > 2 ? 'warning' : 'good';
                       
    // Update Redux store with stats and calculated threat state
    store.dispatch(updateStreamStats({
        animal_count: stats.animal_count,
        healthy_count: stats.healthy_count,
        attack_count: stats.amount_attack,
        threat_state: threatState
    }));
});

// Listen for metrics updates
socket.on('metrics', (metrics) => {
    store.dispatch(updateStreamStats({
        ...metrics,
        threat_state: metrics.health < 80 ? 'danger' :
                     metrics.health < 90 ? 'warning' : 'good'
    }));
});

// Video stream event handlers
socket.on('frame_update', (frameData) => {
  store.dispatch(updateStreamStats({ type: 'frame_update', data: frameData }));
});

socket.on('detection_update', (data) => {
  store.dispatch(updateStreamStats({ type: 'detection_update', data }));
});

// Start video processing
const startVideoProcessing = (videoPath, animalName) => {
  const formData = new FormData();
  
  // If videoPath is a URL, extract the filename
  const filename = videoPath.split('/').pop();
  
  // Create a blob from the video URL
  fetch(videoPath)
    .then(response => response.blob())
    .then(blob => {
      // Create a File object from the blob
      const file = new File([blob], filename, { type: 'video/mp4' });
      formData.append('file', file);
      formData.append('animal_name', animalName);

      return fetch('http://localhost:7017/video_feed', {
        method: 'POST',
        body: formData
      });
    })
    .then(response => response.json())
    .then(data => console.log('Video processing started:', data))
    .catch(error => console.error('Error starting video processing:', error));
};

export { socket, startVideoProcessing };
