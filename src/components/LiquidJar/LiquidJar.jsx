import React, { useMemo, useEffect, useRef } from 'react';
import './LiquidJar.css';

const LiquidJar = ({ 
  percentage = 0, 
  showLabel = true,
  size = 160 
}) => {
  const containerRef = useRef(null);
  const liquidRef = useRef(null);
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);
  
  // Ensure percentage is between 0 and 100
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  
  // Generate bubbles based on fill level
  const bubbles = useMemo(() => {
    const count = Math.max(20, Math.floor(normalizedPercentage / 2.5));
    return Array(count).fill(null).map(() => ({
      left: Math.random() * 100,
      bottom: Math.random() * (normalizedPercentage - 10),
      delay: Math.random() * 2,
      duration: 1 + Math.random(),
      size: 2 + Math.random() * (normalizedPercentage > 50 ? 8 : 6),
      opacity: 0.4 + Math.random() * 0.4
    }));
  }, [normalizedPercentage]);

  // Animate waves
  useEffect(() => {
    let animationFrame;
    let time = 0;
    
    const animate = () => {
      time += 0.03;
      if (wave1Ref.current && wave2Ref.current) {
        const intensity = 0.7 + (normalizedPercentage / 100) * 0.3;
        wave1Ref.current.style.transform = `translate3d(${Math.sin(time * 2) * 5 * intensity}px, ${Math.sin(time * 3) * 4 * intensity}px, 0)`;
        wave2Ref.current.style.transform = `translate3d(${Math.sin(time * 2.5) * -4 * intensity}px, ${Math.sin(time * 3.5) * 3 * intensity}px, 0)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [normalizedPercentage]);

  // Update liquid level
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--fill-height', `${normalizedPercentage}%`);
    }
  }, [normalizedPercentage]);

  return (
    <div className="liquid-jar-container" ref={containerRef} style={{ '--size': `${size}px` }}>
      <div className="liquid-jar">
        <div className="liquid-fill" ref={liquidRef}>
          <div className="wave" ref={wave1Ref}></div>
          <div className="wave wave2" ref={wave2Ref}></div>
          
          <div className="bubbles">
            {bubbles.map((bubble, i) => (
              <div 
                key={i} 
                className="bubble"
                style={{
                  left: `${bubble.left}%`,
                  bottom: `${bubble.bottom}%`,
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  animationDelay: `${bubble.delay}s`,
                  animationDuration: `${bubble.duration}s`,
                  opacity: bubble.opacity
                }}
              />
            ))}
          </div>
        </div>
        
        {showLabel && (
          <div className="liquid-percentage">
            <span className="liquid-value">{normalizedPercentage}%</span>
            <span className="liquid-label">Feed Level</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(LiquidJar);
