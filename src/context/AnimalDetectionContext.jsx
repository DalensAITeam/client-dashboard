import React, { createContext, useState, useContext, useEffect } from 'react';
import { socket } from '../socket/socket';

const AnimalDetectionContext = createContext();

export const useAnimalDetection = () => {
  const context = useContext(AnimalDetectionContext);
  if (!context) {
    throw new Error('useAnimalDetection must be used within an AnimalDetectionProvider');
  }
  return context;
};

export const AnimalDetectionProvider = ({ children }) => {
  const [detectionData, setDetectionData] = useState({});
  const [processingVideos, setProcessingVideos] = useState(new Set());

  // Generate simulated detection data for demo purposes
  const generateSimulatedDetection = (cameraId, animalType) => {
    const isYouTube = true; // We're using YouTube videos now
    const timeOfDay = new Date().getHours();
    const isNightTime = timeOfDay >= 20 || timeOfDay <= 5;
    const maxDetections = isNightTime ? 3 : 8; // Fewer animals at night
    
    // Generate random number of detections based on time of day
    const numDetections = Math.floor(Math.random() * maxDetections) + 1;
    
    // Generate detection boxes with realistic properties
    const detections = [];
    for (let i = 0; i < numDetections; i++) {
      // Create realistic bounding boxes
      const x = Math.random() * 0.7 + 0.15; // Keep within frame (15-85% of width)
      const y = Math.random() * 0.7 + 0.15; // Keep within frame (15-85% of height)
      const width = Math.random() * 0.2 + 0.1; // 10-30% of frame width
      const height = Math.random() * 0.2 + 0.1; // 10-30% of frame height
      
      // Confidence varies by time of day and animal type
      let confidence = Math.random() * 0.3 + 0.7; // Base 70-100%
      if (isNightTime) confidence *= 0.8; // Lower confidence at night
      
      // Health status with probabilities
      const healthStatus = Math.random() > 0.8 ? 'sick' : 
                          Math.random() > 0.5 ? 'active' : 'healthy';
      
      detections.push({
        id: `${cameraId}-${i}`,
        bbox: [x, y, width, height],
        confidence: confidence.toFixed(2),
        class: animalType || 'animal',
        health: healthStatus,
        timestamp: Date.now()
      });
    }
    
    return {
      cameraId,
      detections,
      timestamp: Date.now(),
      processingTime: Math.random() * 100 + 50, // 50-150ms processing time
      frameRate: Math.random() * 10 + 20, // 20-30 FPS
      resolution: '1280x720',
      source: 'youtube'
    };
  };
  
  // Start detection for a video
  const startDetection = async (cameraId, videoName, animalType) => {
    try {
      const safeId = cameraId || `cam-${Date.now()}`;
      const safeAnimalType = animalType || 'Chicken';

      // Add to processing set
      setProcessingVideos(prev => new Set(prev).add(safeId));
      
      // Check if the video URL is a YouTube link
      const isYouTube = typeof videoName === 'string' && videoName.includes('youtube.com');
      
      if (isYouTube) {
        // For YouTube videos, simulate detection data locally
        console.log('Using simulated detection for YouTube video:', safeId);
        
        // Set up interval to simulate detection updates
        const simulationInterval = setInterval(() => {
          const simulatedData = generateSimulatedDetection(safeId, safeAnimalType);
          
          // Update detection data state
          setDetectionData(prev => ({
            ...prev,
            [safeId]: simulatedData
          }));
        }, 5000); // Update every 5 seconds
        
        // Store the interval ID for cleanup
        window[`simulation_${safeId}`] = simulationInterval;
      } else {
        // For other videos, use the WebSocket connection
        socket.emit('start_detection', {
          cameraId: safeId,
          videoName,
          animalType: safeAnimalType
        });
      }

      return { success: true, cameraId: safeId };
    } catch (error) {
      console.error('Failed to start detection:', error);
      return { success: false, error: error.message };
    }
  };

  // Stop detection for a video
  const stopDetection = (cameraId) => {
    if (!cameraId) return;
    
    // Clear any simulation interval for YouTube videos
    const simulationInterval = window[`simulation_${cameraId}`];
    if (simulationInterval) {
      clearInterval(simulationInterval);
      delete window[`simulation_${cameraId}`];
      console.log('Cleared simulation interval for:', cameraId);
    }
    
    // Also notify backend via socket for non-YouTube videos
    socket.emit('stop_detection', { cameraId });
    
    // Remove from processing videos set
    setProcessingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(cameraId);
      return newSet;
    });
    
    // Clear detection data for this camera
    setDetectionData(prev => {
      const newData = { ...prev };
      delete newData[cameraId];
      return newData;
    });
  };

  useEffect(() => {
    // Listen for detection updates from backend
    socket.on('detection_update', (data) => {
      if (data && data.cameraId) {
        setDetectionData(prev => ({
          ...prev,
          [data.cameraId]: {
            ...data,
            lastUpdate: new Date()
          }
        }));
      }
    });

    return () => {
      socket.off('detection_update');
    };
  }, []);

  return (
    <AnimalDetectionContext.Provider
      value={{
        detectionData,
        processingVideos: Array.from(processingVideos),
        startDetection,
        stopDetection
      }}
    >
      {children}
    </AnimalDetectionContext.Provider>
  );
};
