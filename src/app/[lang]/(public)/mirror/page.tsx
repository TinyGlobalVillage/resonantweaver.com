'use client';

import styled from 'styled-components';
import { sectionsData } from '@/data/Mirror/mirrorSpotlight';
import { textContent } from '../../../../data/Mirror/mirrorTxtImgSplit';
import { mapCTAContent } from '@/data/Mirror/mirrorCTA';
import TextImageSplit from '@/app/[lang]/_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '@/app/[lang]/_allPageComponents/segments/Spotlight';
import CTA from '@/app/[lang]/_allPageComponents/segments/CTA';

const PageWrapper = styled.div`
  margin: 0 auto;
  margin-top: 80px;
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

export default function QuantumResonanceMap() {
  return (
    <PageWrapper>
      <TextImageSplit sectionData={textContent[0]} gradientDirection="normal" hideButton />
      <TextImageSplit sectionData={textContent[3]} gradientDirection="flipped" hideButton />

      <SpotlightSection sectionData={sectionsData[0]} />
      <SpotlightSection sectionData={sectionsData[1]} />

      <TextImageSplit sectionData={textContent[2]} gradientDirection="normal" />

      <BG><CTA data={mapCTAContent} /></BG>
    </PageWrapper>
  );
}