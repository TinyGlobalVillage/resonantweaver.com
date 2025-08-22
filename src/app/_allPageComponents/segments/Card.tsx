'use client';

import styled from 'styled-components';

type CardProps = {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

const CardWrapper = styled.div`
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #123524);
  border-radius: 1rem;
  transition: transform 0.3s ease;
  padding: 2rem;

  &:hover {
    transform: translateY(-10px);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, #123524);
  }
`;

const Title = styled.h3`
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