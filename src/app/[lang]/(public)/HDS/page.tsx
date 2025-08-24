'use client';

import styled from 'styled-components';
import { sectionsData } from '@/data/HDS/HDS-spotlight';
import { HDSIntro } from '../../../../data/HDS/HDS-TxtImgSplit';
import { mapCTAContent } from '@/data/HDS/hdsCTA';
import TextImageSplit from '@/app/[lang]/_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '@/app/[lang]/_allPageComponents/segments/Spotlight';
import CTA from '../../_allPageComponents/segments/CTA';



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
<TextImageSplit sectionData={HDSIntro[0]} gradientDirection="normal" />
<TextImageSplit sectionData={HDSIntro[1]} gradientDirection="flipped" reverse />
<CTA data={mapCTAContent} />
    </PageWrapper>
  );
}