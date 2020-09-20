import React, { useEffect } from 'react';

export const useScroll = (): number => {
  const [scrollHeight, setScrollHeight] = React.useState(0);

  function handleScroll() {
    setScrollHeight(window.innerHeight + document.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollHeight;
};

export const useDebounce = (
  callback: () => void,
  timeout: number,
  dependencies: any[]
): void =>
  useEffect(() => {
    const handler = setTimeout(callback, timeout);

    return () => {
      clearTimeout(handler);
    };
  }, dependencies);
