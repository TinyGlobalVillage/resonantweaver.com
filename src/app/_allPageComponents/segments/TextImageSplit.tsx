'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Button from '../buttons/Button';

type Props = {
  sectionData: {
    label: string;
    content: string;
    link: string;
    image: string;
    buttonLabel: string;
    buttonLink?: string;
  };
  gradientDirection?: 'normal' | 'flipped';
  reverse?: boolean;
  hideButton?: boolean;
};

const SectionWrapper = styled.section<{ $gradientDirection: 'normal' | 'flipped' }>`
  background: ${({ $gradientDirection }) =>
    $gradientDirection === 'flipped'
      ? 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(18, 53, 36, 0.95) 100%)'
      : 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(18, 53, 36, 0.95) 100%)'};
  padding: 6rem 2rem 4rem;

`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
  padding: 0 2rem; 
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 0 15px rgba(199, 180, 145, 0.4));
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

export default function TextImageSplit({ sectionData, gradientDirection = 'normal', reverse = false, hideButton = false }: Props) {
  return (
    <SectionWrapper $gradientDirection={gradientDirection}>
      <Container>
        {reverse ? (
          <>
            <ImageWrapper>
              <Image
                src={sectionData.image}
                alt="Section image"
                width={400}
                height={400}
                priority
              />
            </ImageWrapper>
            <TextBlock>
              <h2>{sectionData.label}</h2>
              {sectionData.content.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <ButtonWrapper>
               {!hideButton && sectionData.buttonLabel && (
                  <Button href={sectionData.link}>{sectionData.buttonLabel}</Button>
                )}
              </ButtonWrapper>
            </TextBlock>
          </>
        ) : (
          <>
            <TextBlock>
              <h2>{sectionData.label}</h2>
              {sectionData.content.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <ButtonWrapper>
               {!hideButton && sectionData.buttonLabel && (
                   <Button href={sectionData.link}>{sectionData.buttonLabel}</Button>
                )}
              </ButtonWrapper>
            </TextBlock>
            <ImageWrapper>
              <Image
                src={sectionData.image}
                alt="Section image"
                width={400}
                height={400}
                priority
              />
            </ImageWrapper>
          </>
        )}
      </Container>
    </SectionWrapper>
  );
}