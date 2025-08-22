'use client';

import styled from 'styled-components';
import { sectionsData } from '@/src/data/Map/map-spotlight';
import { mapTxtImgSplit } from '../../../data/Map/map-TxtImgSplit';
import { mapCTAContent } from '@/src/data/Map/mapCTA';
import TextImageSplit from '../../_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '@/src/app/_allPageComponents/segments/Spotlight';
import CTA from '@/src/app/_allPageComponents/segments/CTA';

const PageWrapper = styled.div`
  margin: 0 auto;
  color: #E8E5DA;
`;

export default function QuantumResonanceMap() {
  return (
    <PageWrapper>
      <TextImageSplit sectionData={mapTxtImgSplit[0]} gradientDirection="flipped" hideButton />

      <SpotlightSection sectionData={sectionsData[0]} />
      <SpotlightSection sectionData={sectionsData[1]} />

      <TextImageSplit sectionData={mapTxtImgSplit[1]} gradientDirection="normal" />
      <TextImageSplit sectionData={mapTxtImgSplit[2]} gradientDirection="flipped" reverse />

      <CTA data={mapCTAContent} />
    </PageWrapper>
  );
}