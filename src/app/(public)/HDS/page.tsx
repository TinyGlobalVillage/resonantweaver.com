'use client';

import styled from 'styled-components';
import { sectionsData } from '@/src/data/HDS/HDS-spotlight';
import { HDSIntro } from '../../../data/HDS/HDS-TxtImgSplit';
import TextImageSplit from '../../_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '@/src/app/_allPageComponents/segments/Spotlight';


const PageWrapper = styled.div`
  margin: 0 auto;
  color: #E8E5DA;
`;

type SectionProps = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export default function HDS() {
  return (
    <PageWrapper>   
      <SpotlightSection sectionData={sectionsData[0]} />
      <SpotlightSection sectionData={sectionsData[1]} />
<TextImageSplit sectionData={HDSIntro[0]} gradientDirection="normal" />
<TextImageSplit sectionData={HDSIntro[1]} gradientDirection="flipped" reverse />
    </PageWrapper>
  );
}