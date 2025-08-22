'use client';

import styled, { keyframes, css } from 'styled-components';
import { useMemo } from 'react';

// Gentle rotational drift
const drift = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Glow pulse animation
const glow = keyframes`
  0%, 100% {
    opacity: 0.6;
    box-shadow: 0 0 1.5vw 0.6vw rgba(255, 150, 80, 0.3);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 3.5vw 1.8vw rgba(255, 170, 100, 1);
  }
`;

// Generate randomized movement paths
const generateRandomKeyframe = () => {
  const steps = 5;
  const parts = [];

  for (let i = 0; i <= steps; i++) {
    const percent = Math.floor((i / steps) * 100);
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    const scale = 0.2 + Math.random() * 0.3;

    parts.push(`${percent}% { transform: translate(${x}vw, ${y}vh) scale(${scale}); }`);
  }

  return keyframes`${parts.join('\n')}`;
};

const Firefly = styled.div<{
  $animation: ReturnType<typeof keyframes>;
  $delay: number;
}>`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;

  animation: ${({ $animation }) => css`${$animation} 240s ease-in-out alternate infinite`};
  animation-delay: ${({ $delay }) => `${$delay}s`};

  &::before {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0.6vw;
    height: 0.6vw;
    border-radius: 50%;
    opacity: 0;
    background: radial-gradient(
      circle,
      rgba(255, 200, 150, 0.7) 10%,
      rgba(255, 160, 90, 0.4) 50%,
      rgba(255, 140, 80, 0.1) 100%
    );
    animation: ${drift} 16s ease-in-out alternate infinite, ${glow} 8s ease-in-out infinite;
    animation-delay: ${({ $delay }) => `${$delay}s, ${$delay + 1}s`};
  }
`;

const FirefliesContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default function Fireflies() {
  const fireflies = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        animation: generateRandomKeyframe(),
        delay: Math.random() * 6,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
      })),
    []
  );

  return (
    <FirefliesContainer>
      {fireflies.map((f, i) => (
        <Firefly
          key={i}
          $animation={f.animation}
          $delay={f.delay}
          style={{ left: `${f.startX}%`, top: `${f.startY}%` }}
        />
      ))}
    </FirefliesContainer>
  );
}
