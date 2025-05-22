"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./LiquidEffect.module.css";

const FeedingStatus = ({
  feedingStatus = 70, // Default value for demo
}) => {
  const containerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const prevFeedingStatus = useRef(feedingStatus);

  // Update animation speed when feed level changes
  useEffect(() => {
    const diff = Math.abs(feedingStatus - prevFeedingStatus.current);
    // Increase animation speed temporarily when there's a big change
    if (diff > 10) {
      setAnimationSpeed(1.5);
      setTimeout(() => setAnimationSpeed(1), 2000);
    }
    prevFeedingStatus.current = feedingStatus;
  }, [feedingStatus]);

  const getStatusInfo = (level) => {
    if (level >= 70) return {
      gradientFrom: "rgb(16, 185, 129)",
      gradientTo: "rgb(5, 150, 105)",
      label: "Full",
      textColor: "text-emerald-500"
    };
    if (level >= 35) return {
      gradientFrom: "rgb(245, 158, 11)",
      gradientTo: "rgb(217, 119, 6)",
      label: "Medium",
      textColor: "text-amber-500"
    };
    return {
      gradientFrom: "rgb(239, 68, 68)",
      gradientTo: "rgb(220, 38, 38)",
      label: "Low",
      textColor: "text-red-500"
    };
  };

  const createBubbles = () => {
    return Array(8).fill(null).map(() => ({
      left: Math.random() * 100,
      size: 4 + Math.random() * 4,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2
    }));
  };

  // Initialize and manage bubbles
  useEffect(() => {
    setBubbles(createBubbles());
    
    const interval = setInterval(() => {
      setBubbles(createBubbles());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const status = getStatusInfo(feedingStatus);

  return (
    <div className="flex flex-col h-full w-full p-4">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Main container */}
        <div className="relative w-32 h-32" ref={containerRef}>
          {/* Liquid container */}
          <div className={`absolute inset-0 rounded-full border-2 border-gray-200 overflow-hidden backdrop-blur-sm ${styles.liquidContainer}`}>
            {/* Liquid fill */}
            <div 
              className={styles.liquidFill}
              style={{
                height: `${feedingStatus}%`,
                background: `linear-gradient(to bottom, ${status.gradientFrom}, ${status.gradientTo})`,
                '--animation-speed': animationSpeed
              }}
            >
              {/* Wave effects */}
              <div className={styles.waveEffect} />
              <div className={styles.waveEffect} style={{ animationDelay: '-4s' }} />
              
              {/* Bubbles */}
              <div className={styles.bubbles}>
                {bubbles.map((bubble, index) => (
                  <div
                    key={index}
                    className={styles.bubble}
                    style={{
                      left: `${bubble.left}%`,
                      '--bubble-size': `${bubble.size}px`,
                      '--duration': `${bubble.duration}s`,
                      animationDelay: `${bubble.delay}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Shine effect */}
              <div className={styles.shine} />
            </div>
          </div>

          {/* Percentage overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${status.textColor} drop-shadow-md`}>
              {feedingStatus}%
            </span>
          </div>
        </div>
        
        {/* Status label */}
        <div className={`text-sm font-medium ${status.textColor} mt-3`}>
          {status.label}
        </div>
      </div>

      {/* Last updated text */}
      <div className="mt-2 text-center">
        <div className="text-xs text-gray-500">
          Last updated: Just now
        </div>
      </div>
    </div>
  );
};

export default React.memo(FeedingStatus);
