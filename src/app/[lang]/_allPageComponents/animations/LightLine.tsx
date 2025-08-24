// components/LightLine.tsx
'use client';

import styled, { keyframes } from 'styled-components';

const pulseDown = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    height: 100vh;
    opacity: 1;
  }
`;

const LightLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(to bottom, #e9e0d1 0%, #cfa88f 100%);
  opacity: 0;
  animation: ${pulseDown} 2.5s ease-out forwards;
  z-index: -1;
  transform: translateX(-50%);
  box-shadow: 0 0 12px 3px rgba(207, 168, 143, 0.5);
`;

export default function VerticalLightLine() {
  return <LightLine />;
}
