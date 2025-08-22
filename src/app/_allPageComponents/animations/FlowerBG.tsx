'use client';

import styled from 'styled-components';

const Flowers = styled.img.attrs(() => ({
  src: '/images/FlowersEnergy.png', 
  alt: 'floating flowers',
}))`
 position: absolute;
  top: 100%;
  left: -10%;
  width: 80%;
  max-width: 1000px;
  height: auto;
  opacity: 0.5;
  pointer-events: none;
  z-index: -2;

  @media (max-width: 768px) {
    width: 120%;
    left: -40%;
  }
`;

export default Flowers;
