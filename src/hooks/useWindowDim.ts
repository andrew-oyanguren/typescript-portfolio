import { useState, useEffect } from 'react';

const useWindowDim = () => {
  const [windowDim, setWindowDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowResize = () => {
    setWindowDim({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    windowDim,
  };
};

export default useWindowDim;
