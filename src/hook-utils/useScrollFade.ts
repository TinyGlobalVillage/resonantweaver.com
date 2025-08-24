// hooks/useScrollFade.ts
import { useEffect } from 'react';

export default function useScrollFade(
  targetId: string,
  thresholdPercent = 0.25
) {
  useEffect(() => {
    const el = document.getElementById(targetId);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hideThreshold =
        window.innerHeight * thresholdPercent;

      if (el) {
        el.style.opacity =
          scrollPosition > hideThreshold ? '0' : '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, [targetId, thresholdPercent]);
}
