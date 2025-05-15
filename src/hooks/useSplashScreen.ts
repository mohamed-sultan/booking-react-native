import { useState, useCallback } from 'react';

const useSplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  const completeSplash = useCallback(() => {
    setShowSplash(false);
  }, []);

  return { showSplash, completeSplash };
};

export default useSplashScreen;
