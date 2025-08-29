'use client';

import styled from 'styled-components';
import { sectionsData } from '../../../../data/sweep/sweepSpotlight'
import { sweepIntro } from '../../../../data/sweep/sweepTxtImgSplit';
import TextImageSplit from '../../_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '../../_allPageComponents/segments/Spotlight';
import CTA from '@/app/[lang]/_allPageComponents/segments/CTA';
import { sweepCTAContent } from '@/data/sweep/sweepCTA';

const PageWrapper = styled.div`
  margin: 0 auto;
  color: #E8E5DA;
`;

const BG = styled.div`
  padding: 2rem 1rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(18, 53, 36, 0.95) 100%
  );
`;

export default function Astrology() {
  return (
    <PageWrapper>   
<SpotlightSection sectionData={sectionsData[0]} />
<TextImageSplit sectionData={sweepIntro[0]} gradientDirection="normal" />
<BG><CTA data={sweepCTAContent} /></BG>
    </PageWrapper>
  );
}