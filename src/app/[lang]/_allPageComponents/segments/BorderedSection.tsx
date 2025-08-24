'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Paragraph from '@/app/[lang]/_allPageComponents/content-types/Paragraph';

const Wrapper = styled.section`
  margin: 8rem 0;
  padding: 3rem;
  background: linear-gradient(45deg, rgba(18, 53, 36, 1), rgba(0, 0, 0, 1));
  border-left: 3px solid #b78a77;
  border-radius: 8px;
  position: relative;
  z-index: 1;
`;

type Props = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export default function BorderedSection({ title, paragraphs = [], list = [] }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Wrapper>
        <h2>{title}</h2>
        {paragraphs.map((para, index) => (
          <Paragraph key={index}>{para}</Paragraph>
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