// components/utils/LazyMount.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

type LazyMountProps = {
  children: React.ReactNode;
  rootMargin?: string; // e.g., "0px 0px -100px 0px"
  threshold?: number; // e.g., 0.1 = 10% visible
};

export default function LazyMount({
  children,
  rootMargin = '0px 0px 20px 0px',
  threshold = 0.1,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}
