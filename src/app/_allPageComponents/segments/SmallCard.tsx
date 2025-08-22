'use client';

import styled from 'styled-components';

type CardProps = {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

const CardWrapper = styled.div`
  background: #0a0f14;
  border: 2px solid #b78a77;
  border-radius: 20px;
  padding: 2rem;
  color: #f4c3a0;
  font-family: 'EB Garamond', serif;
  box-shadow: 0 0 10px rgba(244, 195, 160, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: inset 0 0 15px rgba(244, 195, 160, 0.4);
    transform: translateY(-4px);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0.1rem;
`;

const Description = styled.p`
  margin-bottom: 0.2rem;
`;

export default function Card({
  title,
  description,
  className = '',
  children,
}: CardProps) {
  return (
    <CardWrapper className={className}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {children}
    </CardWrapper>
  );
}
