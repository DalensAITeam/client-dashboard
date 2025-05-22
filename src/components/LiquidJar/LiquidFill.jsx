import React, { useEffect, useState, useRef } from 'react';
import './LiquidFill.css';

const LiquidFill = ({ percentage = 0 }) => {
  const [bubbles, setBubbles] = useState([]);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Create random bubbles
    const createBubbles = () => {
      const newBubbles = Array.from({ length: 5 }, () => ({
        id: Math.random(),
        left: `${Math.random() * 80 + 10}%`,
        size: `${Math.random() * 8 + 4}px`,
        delay: `${Math.random() * 2}s`,
        duration: `${Math.random() * 1 + 2}s`
      }));
      setBubbles(newBubbles);
    };

    const interval = setInterval(createBubbles, 2000);
    createBubbles();

    return () => clearInterval(interval);
  }, []);

  const getLevel = () => {
    if (percentage >= 70) return 'full';
    if (percentage >= 35) return 'medium';
    return 'low';
  };

  const levelClass = `feed-level-${getLevel()}`;
  const levelLabel = {
    full: 'Full',
    medium: 'Medium',
    low: 'Low'
  }[getLevel()];

  return (
    <div className="flex flex-col items-center">
      <div className={`liquid-fill-container ${levelClass}`} ref={containerRef}>
        {/* SVG Filters for wave effect */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="wave">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.02 0.15" 
                numOctaves="3" 
                result="noise" 
              />
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise" 
                scale="5" 
                xChannelSelector="R" 
                yChannelSelector="G" 
              />
            </filter>
          </defs>
        </svg>
        
        <div
          className="liquid-fill"
          style={{ height: `${percentage}%` }}
        >
          <div className="liquid-wave"></div>
          {bubbles.map(bubble => (
            <div
              key={bubble.id}
              className="liquid-bubble"
              style={{
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
                animationDelay: bubble.delay,
                animationDuration: bubble.duration
              }}
            />
          ))}
          <div className="shine"></div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
        <div className="text-sm text-gray-500 mt-1">{levelLabel}</div>
      </div>
    </div>
  );
};

export default LiquidFill;
