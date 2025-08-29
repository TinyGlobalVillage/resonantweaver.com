'use client';

import styled from 'styled-components';
import { sectionsData } from '../../../../data/About/about-spotlight'
import { textContent } from '../../../../data/About/about-TxtImgSplit';
import TextImageSplit from '../../_allPageComponents/segments/TextImageSplit';
import SpotlightSection from '../../_allPageComponents/segments/Spotlight';

const PageWrapper = styled.div`
  margin: 0 auto;
  color: #E8E5DA;
`;

export default function About() {
  return (
    <PageWrapper>   
<SpotlightSection sectionData={sectionsData[0]} />
<TextImageSplit sectionData={textContent[0]} gradientDirection="normal" />
<TextImageSplit sectionData={textContent[1]} gradientDirection="flipped" reverse/>
    </PageWrapper>
  );
}