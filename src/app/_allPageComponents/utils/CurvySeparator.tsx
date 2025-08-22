'use client';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  margin: 0;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  // display: block;
  margin: 0;
`;

const WavyLineCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Early exit if ctx is null

    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);
    let animationFrameId: number;

    const lineCount = 3;
    const lines = Array.from({ length: lineCount }, (_, i) => ({
      speed: 0.002 + i * 0.001,
      phase: Math.random() * Math.PI * 2,
      color: `rgba(255, 255, 200, 0.2)`,
    }));

    function draw(time: number) {
      ctx?.clearRect(0, 0, width, height);  // Optional chaining here

      lines.forEach((line) => {
        ctx?.beginPath(); // Optional chaining
        ctx!.shadowBlur = 10;  // Type assertion after null check
        ctx!.shadowColor = "#ffff99";
        ctx!.strokeStyle = line.color;
        ctx!.lineWidth = 1.5;

        for (let x = 0; x <= width; x++) {
          const y =
            height / 2 +
            Math.sin((x + time * line.speed * 4) * 0.02 + line.phase) * 15;
          if (x === 0) ctx?.moveTo(x, y);  // Optional chaining
          else ctx?.lineTo(x, y);  // Optional chaining
        }

        ctx?.stroke();  // Optional chaining
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    animationFrameId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default WavyLineCanvas;
