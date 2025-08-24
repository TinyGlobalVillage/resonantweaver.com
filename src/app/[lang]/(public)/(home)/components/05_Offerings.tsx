'use client';

import styled, { keyframes } from 'styled-components';
import React from 'react';
import Card from '@/src/app/[lang]/_allPageComponents/segments/SmallCard';
import Paragraph from '@/src/app/[lang]/_allPageComponents/content-types/Paragraph';
import Button from '@/src/app/[lang]/_allPageComponents/buttons/Button';
import RippleEffect from '@/src/app/[lang]/_allPageComponents/animations/RippleEffect';
// import SparkleEffect, { sparkleFloatKeyframes } from '@/src/app/_allPageComponents/animations/SparkleEffect';
import SparkleEffect from '@/src/app/[lang]/_allPageComponents/animations/SparkleEffect';
import { offeringsData } from '@/src/data/landing/offerings';

const sparkleFloat = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
  25% { transform: translate(4px, -8px) scale(1.1); opacity: 0.85; }
  50% { transform: translate(-3px, -18px) scale(1); opacity: 0.7; }
  75% { transform: translate(3px, -28px) scale(1.05); opacity: 0.8; }
  100% { transform: translate(0, -50px) scale(1); opacity: 0; }
`;

const Wrapper = styled.div`
  padding: 2rem;
  margin-top: -20px;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const OfferingsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  overflow: visible;

  .ripple {
    animation-play-state: running;
    opacity: 1;
  }

  &:hover .sparkle {
  //  animation-name: was "sparkleFloatKeyframes"
   animation-name: ${sparkleFloat};
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 1;
}
  }
`;

const CardStyled = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const Icon = styled.div`
  width: 200px;
  margin: 2rem auto;
  position: relative;
  z-index: 3;

  img {
    width: 100%;
    height: auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  z-index: 4;
`;

type OfferingsProps = React.ComponentPropsWithoutRef<'div'>;

export default function Offerings({ className, ...rest }: OfferingsProps) {
  return (
    <Wrapper className={className} {...rest}>
      <h2>Offerings</h2>
      <OfferingsSection>
        {offeringsData.map((item, i) => (
          <CardContainer key={i}>
            <div style={{ position: 'relative' }}>
              {[0, 1, 2].map((n) => (
                <RippleEffect
                  key={n}
                  rippleColor={item.rippleColor}
                  top={450}
                  delay={n * 0.8}
                />
              ))}
            </div>
            {Array.from({ length: 15 }).map((_, index) => (
              <SparkleEffect key={index} color={item.rippleColor} />
            ))}
            <CardStyled title={item.title}>
              {item.description.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
              <Icon>
                <img src={item.image} alt={item.title} />
              </Icon>
              <ButtonWrapper>
                <Button href={item.link ?? '#'}>{item.buttonLabel}</Button>
              </ButtonWrapper>
            </CardStyled>
          </CardContainer>
        ))}
      </OfferingsSection>
    </Wrapper>
  );
}