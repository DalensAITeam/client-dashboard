import { throttle } from 'lodash';

export const StreamQuality = {
  PREVIEW: {
    width: 320,
    height: 180,
    fps: 10,
    bitrate: 300,
    priority: 'low',
  },
  STANDARD: {
    width: 854,
    height: 480,
    fps: 24,
    bitrate: 1000,
    priority: 'high',
  },
  HD: {
    width: 1280,
    height: 720,
    fps: 30,
    bitrate: 2500,
    priority: 'high',
  },
};

export const getOptimizedStreamUrl = (baseUrl, quality = 'PREVIEW') => {
  const params = new URLSearchParams();
  const qualityProfile = StreamQuality[quality] || StreamQuality.PREVIEW;
  
  params.set('w', qualityProfile.width);
  params.set('h', qualityProfile.height);
  params.set('fps', qualityProfile.fps);
  params.set('q', qualityProfile.bitrate);
  
  // Use WebCodecs API if available
  if (window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E"')) {
    params.set('codec', 'h264');
  } else {
    params.set('codec', 'vp8');
  }
  
  return `${baseUrl}?${params.toString()}`;
};

export const useVideoOptimizer = (streamUrl, { isActive = false, quality = 'PREVIEW' } = {}) => {
  const [optimizedUrl, setOptimizedUrl] = React.useState('');
  const [isHardwareAccelerated, setIsHardwareAccelerated] = React.useState(false);
  
  // Throttle quality updates to prevent rapid URL changes
  const updateQuality = React.useCallback(throttle((newQuality) => {
    setOptimizedUrl(getOptimizedStreamUrl(streamUrl, newQuality));
  }, 1000), [streamUrl]);
  
  React.useEffect(() => {
    // Check for hardware acceleration support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
    
    setIsHardwareAccelerated(!/software/i.test(renderer));
    
    // Set initial quality
    updateQuality(isActive ? 'HD' : quality);
    
    // Cleanup
    return () => {
      updateQuality.cancel();
    };
  }, [streamUrl, isActive, quality, updateQuality]);
  
  // Update quality when active state changes
  React.useEffect(() => {
    updateQuality(isActive ? 'HD' : quality);
  }, [isActive, quality, updateQuality]);
  
  return {
    url: optimizedUrl,
    isHardwareAccelerated,
    setQuality: updateQuality,
  };
};

export const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options,
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  
  return isIntersecting;
};
