import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const observeElement = (elementId) => {
    useEffect(() => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(prev => ({
            ...prev,
            [elementId]: entry.isIntersecting
          }));
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return () => observer.unobserve(element);
    }, [elementId]);
  };

  return { scrollY, isVisible, observeElement };
};
