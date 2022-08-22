import { useEffect } from 'react';

// hooks ------------------------------------------
export const useFillHeight = (): void => {
  // functions ------------------------------------------
  const onResize = (): void => {
    const vh: number = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // useEffect ------------------------------------------
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
};
