'use client';
import styled from 'styled-components';
import Button from '@/src/app/_allPageComponents/buttons/Button';

const CTAWrapper = styled.section`
  text-align: center;
  margin: 12rem 0 6rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 50%;
    width: 220px;
    height: 220px;
    margin-left: -110px;
    border: 2px solid #b78a77;
    border-radius: 50%;
    opacity: 0.2;
    animation: pulse 8s infinite ease-in-out;
    z-index: 1;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.2); opacity: 0.3; }
  }
`;

type Props = {
  data: {
    heading: string;
    text: string;
    buttonLabel: string;
    buttonLink: string;
  };
};

export default function CTA({ data }: Props) {
  return (
    <CTAWrapper id="book">
      <h2>{data.heading}</h2>
      <p>{data.text}</p>
     <Button href={data.buttonLink} style={{ position: 'relative', zIndex: 2 }}>
  {data.buttonLabel}
</Button>
    </CTAWrapper>
  );
}

