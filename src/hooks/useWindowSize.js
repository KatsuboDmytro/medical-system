import { useState, useEffect } from 'react';
import { TABLE_MIN_WIDTH } from '../constants/common';

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth < TABLE_MIN_WIDTH;

  return isMobile;
};

export default useWindowSize;
