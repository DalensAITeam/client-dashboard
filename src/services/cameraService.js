import { io } from 'socket.io-client';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:7017';

class CameraService {
  constructor() {
    this.socket = null;
    this.eventHandlers = new Map();
    this.cameras = [];
    this.connected = false;
  }

  // Initialize WebSocket connection
  connect() {
    // If already connected, disconnect first to ensure a clean connection
    if (this.socket) {
      this.disconnect();
    }

    console.log('Connecting to WebSocket server at:', BACKEND_URL);
    
    this.socket = io(BACKEND_URL, {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      timeout: 30000,
      transports: ['websocket', 'polling'],  // Try WebSocket first, then fall back to polling
      upgrade: true,
      forceNew: true,
    });

    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      this.connected = true;
      this.emit('connectionChange', { connected: true });
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
      this.connected = false;
      this.emit('connectionChange', { connected: false });
    });
    
    this.socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error.message);
      this.emit('connectionChange', { connected: false, error: error.message });
    });
    
    this.socket.on('connect_timeout', () => {
      console.error('WebSocket connection timeout');
      this.emit('connectionChange', { connected: false, error: 'Connection timeout' });
    });
    
    this.socket.on('error', (error) => {
      console.error('WebSocket error:', error);
      this.emit('connectionChange', { connected: false, error: error });
    });

    this.socket.on('stream_update', (data) => {
      this.emit('streamUpdate', data);
    });

    this.socket.on('camera_status', (data) => {
      this.emit('cameraStatus', data);
    });
  }

  // Disconnect WebSocket
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.connected = false;
    }
  }

  // Subscribe to events
  on(event, callback) {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, new Set());
    }
    this.eventHandlers.get(event).add(callback);
    return () => this.off(event, callback);
  }

  // Unsubscribe from events
  off(event, callback) {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.delete(callback);
    }
  }

  // Emit events to subscribers
  emit(event, data) {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.forEach(callback => callback(data));
    }
  }

  // Get list of available cameras with local video files as placeholders
  async getCameras() {
    try {
      // In production, this would fetch from the backend
      return [
        { 
          id: 'camera1', 
          name: 'Chicken Coop', 
          status: 'active',
          animalType: 'Chicken',
          videoFile: '/videos/chicks.mp4'
        },
        { 
          id: 'camera2', 
          name: 'Livestock Area', 
          status: 'active',
          animalType: 'Cow',
          videoFile: '/videos/livestock.mp4'
        },
        { 
          id: 'camera3', 
          name: 'Pig Pen', 
          status: 'active',
          animalType: 'Pig',
          videoFile: '/videos/pigs.mp4'
        }
      ].map(camera => ({
        ...camera,
        streamUrl: `http://localhost:7017/video_feed/${camera.id}`,
        status: 'active'
      }));
    } catch (error) {
      console.error('Error setting up cameras:', error);
      return [];
    }
  }

  // Get camera status
  async getCameraStatus(cameraId) {
    try {
      const response = await fetch(`${BACKEND_URL}/api/cameras/${cameraId}/status`);
      if (!response.ok) throw new Error('Failed to fetch camera status');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching status for camera ${cameraId}:`, error);
      return { status: 'offline', lastSeen: new Date().toISOString() };
    }
  }

  // Start a stream
  startStream(cameraId) {
    if (this.socket && this.connected) {
      this.socket.emit('start_stream', { cameraId });
    }
  }

  // Stop a stream
  stopStream(cameraId) {
    if (this.socket && this.connected) {
      this.socket.emit('stop_stream', { cameraId });
    }
  }
}

export const cameraService = new CameraService();

// Auto-connect when imported
cameraService.connect();

// Handle page visibility changes
const handleVisibilityChange = () => {
  if (document.hidden) {
    cameraService.disconnect();
  } else {
    cameraService.connect();
  }
};

document.addEventListener('visibilitychange', handleVisibilityChange, false);

// Export as default for backward compatibility
export default cameraService;