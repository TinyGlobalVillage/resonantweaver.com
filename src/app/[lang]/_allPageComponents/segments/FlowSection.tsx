'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Paragraph from '@/src/app/[lang]/_allPageComponents/content-types/Paragraph';

const Wrapper = styled.section`
  margin: 8rem 0;
`;

type SectionData = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

type Props = {
  leftData: SectionData;
  rightData?: SectionData; // Optional — if provided, we render two columns
};

const FlowColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
`;

export default function FlowSection({ leftData, rightData }: Props) {
  if (rightData) {
    // Two-column layout
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FlowColumns>
          <Column>
            <SingleBlock data={leftData} />
          </Column>
          <Column>
            <SingleBlock data={rightData} />
          </Column>
        </FlowColumns>
      </motion.div>
    );
  }

  // Single block layout
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Wrapper>
        <SingleBlock data={leftData} />
      </Wrapper>
    </motion.div>
  );
}

function SingleBlock({ data }: { data: SectionData }) {
  return (
    <>
      <h2>{data.title}</h2>
      {data.paragraphs?.map((para, i) => (
        <Paragraph key={i} >{para}</Paragraph>
      ))}
      {data.list && data.list.length > 0 && (
        <ul>
          {data.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}