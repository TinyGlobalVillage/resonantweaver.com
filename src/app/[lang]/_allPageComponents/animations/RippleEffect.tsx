'use client';

import styled, { keyframes } from 'styled-components';

const ripplePulse = keyframes`
  0% {
    transform: rotateX(75deg) scale(0.4);
    opacity: 0;
  }
  10% {
    opacity: 0.25;
  }
  50% {
    transform: rotateX(75deg) scale(1.4);
    opacity: 0.1;
  }
  100% {
    transform: rotateX(75deg) scale(2);
    opacity: 0;
  }
`;

const RippleStyled = styled.div<{
  top: number;
}>`
  position: absolute;
  top: ${(p) => p.top}px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  animation: ${ripplePulse} 6s ease-in-out infinite;
  animation-fill-mode: backwards;
  transform: rotateX(75deg);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.5; /* static, subtle fallback */
  }
`;

export default function RippleEffect({
  rippleColor = '#fff',
  delay = 0,
  top = 0,
}: {
  rippleColor?: string;
  delay?: number;
  top?: number;
}) {
  return (
    <RippleStyled
      top={top}
      style={{
        borderColor: rippleColor,
        boxShadow: `0 0 18px ${rippleColor}`,
        animationDelay: `${delay}s`,
      }}
      className="ripple"
    />
  );
}