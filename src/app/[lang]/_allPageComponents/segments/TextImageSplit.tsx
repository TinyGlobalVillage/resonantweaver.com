'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Button from '../buttons/Button';

type SectionData = {
  label: string;
  content: string;           // paragraphs separated by blank lines (can be indented)
  link: string;
  image?: string;            // optional: text-only if absent/empty
  imageAlt?: string;
  buttonLabel: string;
  buttonLink?: string;
  imageWidth?: number;       // optional intrinsic sizes for Next/Image
  imageHeight?: number;
};

type Props = {
  sectionData: SectionData;
  gradientDirection?: 'normal' | 'flipped';
  reverse?: boolean;         // image on the left when true (desktop)
  hideButton?: boolean;
  imagePriority?: boolean;   // only true if above-the-fold
};

/* ---------- Styles ---------- */

const SectionWrapper = styled.section<{ $gradient: 'normal' | 'flipped' }>`
  --grad: linear-gradient(
    ${({ $gradient }) => ($gradient === 'flipped' ? 'to top' : 'to bottom')},
    rgba(0,0,0,0) 0%,
    rgba(18,53,36,0.95) 100%
  );
  background: var(--grad);
  padding-block: 5rem 4rem;
  padding-inline: 2rem;
`;

const Container = styled.div<{ $reverse: boolean; $hasImage: boolean }>`
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${({ $hasImage }) => ($hasImage ? '3rem' : '0')};
  padding-inline: 2rem;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

  @media (max-width: 500px) {
    flex-direction: column;
    padding-inline: 0;
    gap: ${({ $hasImage }) => ($hasImage ? '2rem' : '0')};
  }
`;

const TextBlock = styled.div`
  flex: 1 1 300px;
  min-width: 300px;

  /* paragraph rhythm */
  p {
    margin: 0 0 1rem;
    line-height: 1.6;
  }
`;

const Figure = styled.figure`
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;            /* center even when stacked */
  max-width: 400px;          /* cap rendered width */
  width: 100%;
  filter: drop-shadow(0 0 15px rgba(199,180,145,0.4));
`;

const ButtonWrapper = styled.div`
  margin-block-start: 2rem;
`;

/* ---------- Utils ---------- */

/** Remove common leading indentation so "blank" lines are actually blank */
function dedent(str: string): string {
  const lines = str.replace(/\r\n/g, '\n').split('\n');
  // Ignore first/last fully-empty lines caused by template formatting
  const first = lines.findIndex(l => l.trim().length > 0);
  const last = [...lines].reverse().findIndex(l => l.trim().length > 0);
  const trimmed = lines.slice(first === -1 ? 0 : first, last === -1 ? lines.length : lines.length - last);

  const indents = trimmed
    .filter(l => l.trim().length > 0)
    .map(l => l.match(/^(\s*)/)![1].length);

  const minIndent = indents.length ? Math.min(...indents) : 0;

  return trimmed.map(l => l.slice(minIndent)).join('\n');
}

/** Split into paragraphs on blank lines (allowing spaces/tabs on those lines) */
function splitParagraphsPreserveBlanks(s: string): string[] {
  return s.split(/\n\s*\n/);
}

/** Render a paragraph, preserving any single line breaks inside it via <br/> */
function renderParagraph(text: string, key: string) {
  const parts = text.split('\n');
  if (parts.length === 1) return <p key={key}>{text}</p>;
  return (
    <p key={key}>
      {parts.map((line, idx) => (
        <span key={`${key}-${idx}`}>
          {line}
          {idx < parts.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}

/* ---------- Component ---------- */

export default function TextImageSplit({
  sectionData,
  gradientDirection = 'normal',
  reverse = false,
  hideButton = false,
  imagePriority = false,
}: Props) {
  const {
    label,
    content,
    link,
    image,
    imageAlt,
    buttonLabel,
    buttonLink,
    imageWidth = 500,   // smaller, saner defaults
    imageHeight = 500,
  } = sectionData;

  const hasImage = typeof image === 'string' && image.trim().length > 0;

  // Normalize + dedent, then split on blank lines (with optional spaces)
  const normalized = dedent(content);
  const paragraphs = splitParagraphsPreserveBlanks(normalized);

  return (
    <SectionWrapper $gradient={gradientDirection}>
      <Container $reverse={reverse} $hasImage={hasImage}>
        <TextBlock>
          <h2>{label}</h2>

          {paragraphs.map((para, i) =>
            renderParagraph(para, `${label}-p-${i}`)
          )}

          {!hideButton && !!buttonLabel && (
            <ButtonWrapper>
              <Button href={buttonLink ?? link}>{buttonLabel}</Button>
            </ButtonWrapper>
          )}
        </TextBlock>

        {hasImage && (
          <Figure aria-label={imageAlt ?? label}>
            <Image
              src={image}
              alt={imageAlt ?? label}
              width={imageWidth}
              height={imageHeight}
              priority={imagePriority}
              decoding="async"
              fetchPriority={imagePriority ? 'high' : 'low'}
              sizes="(max-width: 500px) 92vw, 500px"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                borderRadius: 8,
              }}
            />
          </Figure>
        )}
      </Container>
    </SectionWrapper>
  );
}
