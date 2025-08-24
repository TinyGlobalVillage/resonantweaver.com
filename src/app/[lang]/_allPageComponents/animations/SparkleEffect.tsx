'use client';

import styled, { keyframes, css } from 'styled-components';
import { useId, useMemo } from 'react';

 const sparkleFloat = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
  25% { transform: translate(4px, -8px) scale(1.1); opacity: 0.85; }
  50% { transform: translate(-3px, -18px) scale(1); opacity: 0.7; }
  75% { transform: translate(3px, -28px) scale(1.05); opacity: 0.8; }
  100% { transform: translate(0, -50px) scale(1); opacity: 0; }
`;

// tiny deterministic PRNG
const mulberry32 = (a: number) => () => {
  a |= 0; a = (a + 0x6D2B79F5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
};

// Use transient props ($*) so nothing leaks to DOM
const SparkleStyled = styled.div<{
  $color?: string; $top: number; $left: number; $animate: boolean; $delay: string;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
  width: 2px; height: 2px;
  background: ${({ $color }) => $color || 'rgba(255, 200, 255, 0.6)'};
  box-shadow: 0 0 4px ${({ $color }) => $color || 'rgba(255, 200, 255, 0.6)'};
  border-radius: 50%;
  pointer-events: none; z-index: 2; opacity: 0.6;
  will-change: transform, opacity;
  transition: opacity 0.3s;

  ${({ $animate }) =>
    $animate
      ? css`animation: ${sparkleFloat} 4s infinite ease-in-out;`
      : css`animation: none;`}

  animation-delay: ${({ $delay }) => $delay};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.5; /* static, subtle fallback */
  }
`;

export default function SparkleEffect({
  color, top, left, animate = false,
}: { color?: string; top?: number; left?: number; animate?: boolean }) {
  const id = useId(); // stable across SSR/CSR
  const { t, l, delay } = useMemo(() => {
    const seed = hash(`${id}|${color ?? ''}|${top ?? ''}|${left ?? ''}`);
    const rnd = mulberry32(seed);
    return {
      t: top ?? Math.floor(rnd() * 120) + 400,
      l: left ?? Math.floor(rnd() * 200) + 120,
      delay: `${(rnd() * 3).toFixed(3)}s`,
    };
  }, [id, color, top, left]);

  return (
    <SparkleStyled
      $color={color}
      $top={t}
      $left={l}
      $animate={animate}
      $delay={delay}
      className="sparkle"
    />
  );
}