'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Paragraph from '@/src/app/_allPageComponents/content-types/Paragraph';

const Wrapper = styled.section`
  margin: 10rem auto;
  max-width: 700px;
  text-align: center;
   padding: 0 2rem;  
`;

type Props = {
  sectionData: {
    title: string;
    paragraphs?: string[];
    list?: string[];
  };
};

export default function SpotlightSection({ sectionData }: Props) {
  const { title, paragraphs = [], list = [] } = sectionData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Wrapper>
        <h2>{title}</h2>
        {paragraphs.map((para, index) => (
            <Paragraph
    key={index}
    style={{
      whiteSpace: 'pre-line',
    }}
  >
    {para}
  </Paragraph>
        ))}
        {list.length > 0 && (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </Wrapper>
    </motion.div>
  );
}
