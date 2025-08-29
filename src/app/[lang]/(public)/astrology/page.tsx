'use client';

import styled from 'styled-components';
import { sectionsData } from '../../../../data/Astrology/astro-spotlight'
import { astroIntro } from '../../../../data/Astrology/astro-TxtImgSplit';
import TextImageSplit from '../../_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '../../_allPageComponents/segments/Spotlight';

const PageWrapper = styled.div`
  margin: 0 auto;
  color: #E8E5DA;
`;

export default function Astrology() {
  return (
    <PageWrapper>   
<SpotlightSection sectionData={sectionsData[0]} />
<TextImageSplit sectionData={astroIntro[0]} gradientDirection="normal" />
<TextImageSplit sectionData={astroIntro[1]} gradientDirection="flipped" reverse/>
    </PageWrapper>
  );
}