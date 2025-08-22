'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Button from '../buttons/Button';
import type { ArticleSection as ArticleSectionType } from '../../data/Writings/article-data';

type ArticleProps = {
  sectionData: ArticleSectionType;
};

const ArticleWrapper = styled.section`
  padding: 6rem 2rem 4rem;
`;

const Container = styled.div<{ $twoColumn: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
  flex-direction: ${({ $twoColumn }) => ($twoColumn ? 'row' : 'column')};
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

export default function ArticleSection({ sectionData }: ArticleProps) {
  // Decide: two column if NOT full width AND image exists
  const twoColumn = !sectionData.isFullWidth && !!sectionData.image;

  return (
    <ArticleWrapper>
      <Container $twoColumn={twoColumn}>
        <TextBlock>
          <h2>{sectionData.title}</h2>
          {sectionData.content.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {sectionData.buttonLabel && sectionData.buttonLink && (
            <ButtonWrapper>
              <Button href={sectionData.buttonLink}>{sectionData.buttonLabel}</Button>
            </ButtonWrapper>
          )}
        </TextBlock>

        {twoColumn && sectionData.image && (
          <ImageWrapper>
            <Image
              src={sectionData.image}
              alt="Article image"
              width={400}
              height={400}
              priority
            />
          </ImageWrapper>
        )}
      </Container>
    </ArticleWrapper>
  );
}
