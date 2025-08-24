'use client';
import styled from 'styled-components';
import Paragraph from '@/src/app/[lang]/_allPageComponents/content-types/Paragraph';

type Props = {
  sectionData: {
    title: string;
    paragraphs?: string[]; // supports \n inside each paragraph
    list?: string[];
  };
};

const Wrapper = styled.section`
  margin-block: 8rem;
  margin-inline: auto;
  max-width: 700px;
  text-align: center;
  padding-inline: 2rem;

  h2 { margin-block: 0 1rem; }

  ul {
    margin-block: 1.25rem 0;
    padding-inline-start: 1.25rem;
    text-align: start; /* bullets read better left-aligned */
  }
  li { margin-block: .35rem; }
`;

export default function SpotlightSection({ sectionData }: Props) {
  const { title, paragraphs = [], list = [] } = sectionData;

  // Stable keys derived from content (fallback to index if empty)
  const pk = (s: string, i: number) => (s ? `${s.slice(0, 32)}-${i}` : `p-${i}`);
  const lk = (s: string, i: number) => (s ? `${s.slice(0, 32)}-${i}` : `li-${i}`);

  return (
    <Wrapper aria-labelledby="spotlight-title">
      <h2 id="spotlight-title">{title}</h2>

      {paragraphs.map((para, i) => (
        <Paragraph key={pk(para, i)} style={{ whiteSpace: 'pre-line' }}>
          {para}
        </Paragraph>
      ))}

      {list.length > 0 && (
        <ul role="list">
          {list.map((item, i) => (
            <li key={lk(item, i)}>{item}</li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
}