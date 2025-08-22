'use client';
import styled from 'styled-components';
import Button from '@/src/app/_allPageComponents/buttons/Button';
import Logo from '@/src/app/_allPageComponents/utils/Logo';
import SparkleEffect from '@/src/app/_allPageComponents/animations/SparkleEffect';
import RippleEffect from '@/src/app/_allPageComponents/animations/RippleEffect';

const HeroSection = styled.section`
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  text-align: center;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    margin-top: -25px;
  }

  p {
    max-width: 700px;
    margin: 0 auto 2rem;
    font-size: 1.2rem;
  }

  .logo-img {
    max-width: 350px;
    margin: 0px auto;
    display: block;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const SparkleWrapper = styled.div`
  position: absolute;
  top: -150px;
  left: -40px;
  width: 100%;
  height: 100%;
  pointer-events: none; 
  z-index: 0; 
`;

export default function AboveFold() {
  return (
    <HeroSection>
      {[0, 1, 2].map((n) => (
        <RippleEffect
          key={n}
          rippleColor="#f4c3a0"
          top={290}
          delay={n * 0.8}
        />
      ))}

      <ContentWrapper>
        <Logo />

        <h2>The Resonant Weaver</h2>

        <SparkleWrapper>
          {Array.from({ length: 15 }).map((_, index) => (
            <SparkleEffect key={index} color="#f4c3a0" animate />
          ))}
        </SparkleWrapper>

        <p className="statement">
          Decode your energy. <br />
          Embody your cosmic design.
        </p>

        <Button href="/#02_JustBelowFold" role="button">Learn More</Button>
        <Button href="#" role="button">Book a Reading</Button>
      </ContentWrapper>
    </HeroSection>
  );
}
