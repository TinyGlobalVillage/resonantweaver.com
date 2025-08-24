'use client';

import styled from 'styled-components';

type UnderConstructionAnimationProps = {
  width?: number;
  height?: number;
  className?: string;
};

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const StyledVideo = styled.video<{ $width: number; $height: number }>`
  background: transparent;
  display: block;
  margin: 0 auto;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
`;

export default function UnderConstruction({
  width = 500,
  height = 500,
  className = '',
}: UnderConstructionAnimationProps) {
  return (
    <VideoWrapper className={className}>
      <StyledVideo
        autoPlay
        loop
        muted
        playsInline
        $width={width}
        $height={height}
      >
        <source src="/images/ConstructionGuy.webm" type="video/webm" />
        Your browser does not support the video tag.
      </StyledVideo>
    </VideoWrapper>
  );
}