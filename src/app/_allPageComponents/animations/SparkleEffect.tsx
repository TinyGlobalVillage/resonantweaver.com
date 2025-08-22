'use client';

import styled, { keyframes, css } from 'styled-components';
import type { CSSProperties } from 'react';

const sparkleFloat = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
  25% { transform: translate(4px, -8px) scale(1.1); opacity: 0.85; }
  50% { transform: translate(-3px, -18px) scale(1); opacity: 0.7; }
  75% { transform: translate(3px, -28px) scale(1.05); opacity: 0.8; }
  100% { transform: translate(0, -50px) scale(1); opacity: 0; }
`;

// Export keyframes in case you still want to use hover CSS elsewhere
export const sparkleFloatKeyframes = sparkleFloat;

const SparkleStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !['top', 'left', 'color', 'animate'].includes(prop),
})<{
  color?: string;
  top?: number;
  left?: number;
  animate?: boolean;
}>`
  position: absolute;
  top: ${(props) => (props.top !== undefined ? `${props.top}px` : `${Math.floor(Math.random() * 120) + 400}px`)};
  left: ${(props) => (props.left !== undefined ? `${props.left}px` : `${Math.floor(Math.random() * 200) + 120}px`)};
  width: 2px;
  height: 2px;
  background: ${(props) => props.color || 'rgba(255, 200, 255, 0.6)'};
  box-shadow: 0 0 4px ${(props) => props.color || 'rgba(255, 200, 255, 0.6)'};
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
  opacity: 0.6;
  will-change: transform, opacity;
  transition: opacity 0.3s;
  animation: none;

  ${(props) =>
    props.animate &&
    css`
      animation: ${sparkleFloat} 4s infinite ease-in-out;
      animation-delay: ${Math.random() * 3}s;
    `}
`;

export default function SparkleEffect({
  color,
  top,
  left,
  animate = false,
}: {
  color?: string;
  top?: number;
  left?: number;
  animate?: boolean;
}) {
  const delay = `${Math.random() * 3}s`;

  return (
    <SparkleStyled
      color={color}
      top={top}
      left={left}
      animate={animate}
      className="sparkle"
      style={{
        animationDelay: delay,
      }}
    />
  );
}
