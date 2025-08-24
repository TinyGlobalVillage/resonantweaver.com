'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Button from '@/src/app/[lang]/_allPageComponents/buttons/Button';
import { sections, resetSection, Section } from '@/src/data/landing/trine-path';

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M',
    x,
    y,
    'L',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    'Z',
  ].join(' ');
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  align-items: flex-start;
  min-height: 700px;
  padding-top: 100px;
  margin-bottom: 100px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(18, 53, 36, 0.95) 100%);
`;

const Svg = styled.svg`
  width: 80vw;
  max-width: 450px;
  height: auto;
  aspect-ratio: 1 / 1;
  filter: drop-shadow(0 0 10px rgba(183, 138, 119, 0.3));
`;

const Segment = styled(motion.path)`
  cursor: pointer;
  transition: opacity 0.3s ease;
`;

const CenterCircle = styled(motion.circle)`
  cursor: pointer;
  fill: url(#center-gradient);
  stroke: #b78a77;
  stroke-width: 3;
`;

const CenterText = styled.text`
  font-size: 0.9rem;
  fill: #b78a77;
  pointer-events: none;
`;

const InfoBox = styled(motion.div)`
  max-width: 600px;
  padding: 1.5rem;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Content = styled.p`
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export default function TrineWheel() {
  const [activeSection, setActiveSection] = useState<Section>(resetSection);

  // Preload button style
  const preloadStyles = (
    <div style={{ display: 'none' }}>
      <Button href="#">Preload</Button>
    </div>
  );

  const segmentImages = sections.map((section) => section.image);

  return (
    <>
      {preloadStyles}

      <Wrapper>
        <Svg viewBox="0 0 300 300">
          <defs>
            <radialGradient id="center-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(18, 53, 36, 1)" />
              <stop offset="100%" stopColor="rgba(10, 20, 17, 1)" />
            </radialGradient>

            {segmentImages.map((imgUrl, index) => (
              <pattern
                key={index}
                id={`pattern-${index}`}
                patternUnits="userSpaceOnUse"
                width="300"
                height="300"
              >
                <image
                  href={imgUrl}
                  x="0"
                  y="0"
                  width="300"
                  height="300"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            ))}
          </defs>

          {sections.map((section, index) => {
            const startAngle = index * 120;
            const endAngle = (index + 1) * 120;
            const path = describeArc(150, 150, 140, startAngle, endAngle);

            return (
              <Segment
                key={section.id}
                d={path}
                fill={`url(#pattern-${index})`}
                stroke="#b78a77"
                strokeWidth="2"
                onClick={() => setActiveSection(section)}
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              />
            );
          })}

          <CenterCircle
            cx="150"
            cy="150"
            r="35"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection(resetSection)}
          />
          <CenterText x="150" y="145" textAnchor="middle">
             <tspan x="150" dy="0">Axis</tspan>
             <tspan x="150" dy="1.2em">Living</tspan>
          </CenterText>
        </Svg>

        <InfoBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title>{activeSection.label}</Title>
          <Content>{activeSection.content}</Content>
          {activeSection.link && (
            <ButtonWrapper>
              <Button href={activeSection.link}>
                {activeSection.buttonLabel}
              </Button>
            </ButtonWrapper>
          )}
        </InfoBox>
      </Wrapper>
    </>
  );
}
