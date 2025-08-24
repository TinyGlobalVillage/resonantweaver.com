// src/components/navigation/NavBar.styles.ts
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '@/src/styles/breakpoints';

/* ---------- Desktop + Mobile container ---------- */
export const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  min-height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9996;

  /* bar itself stays transparent; overlay does the work */
  background: transparent;
  transition: none;

  /* ensure ::after can stack behind children */
  isolation: isolate; /* <-- added */

  /* animated scrim (behind content) */
  &::after {
    content: '';
    position: absolute;
    z-index: 0;             /* behind content */
    top: 0; 
    left: 0; 
    right: 0;
    height: ${({ $scrolled }) => ($scrolled ? '80px' : '0px')}; /* not too far */
    pointer-events: none;
    transition: height 0.3s ease;

    /* your gradient */
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%, 
      rgba(10, 15, 20, 1) 30%
      
    );
  }

  @media ${media.tablet} {
    padding: 1rem;
  }
  @media ${media.laptop} {
    padding: 1rem;
  }
`;

export const NavWrapper = styled.div`
  position: relative; /* <-- added */
  z-index: 1;         /* <-- added (above ::after) */

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media ${media.tablet} {
    justify-content: center;
    gap: 5rem;
  }
  @media ${media.laptopL} {
    gap: 5rem;
  }
`;

export const LogoWrapper = styled.div<{ $open: boolean; $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin: 1px 1px 1px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .2s ease;

  &:hover { transform: scale(1.05); }
  &:focus { outline: none; }

  @media ${media.tablet} { margin: 0; }
  @media ${media.laptop} { margin-right: -40px; }
  @media ${media.laptopL} { margin-right: -10px; }
`;

export const LogoLink = styled(Link)<{ $open: boolean }>`
  display: flex;
  align-items: center;

  position: ${({ $open }) => ($open ? 'fixed' : 'relative')};
  top: ${({ $open }) => ($open ? '33px' : '5px')};
  left: ${({ $open }) => ($open ? '15px' : '0')};

  width: 100%;
  height: 100%;
  transition: transform .2s ease;
  cursor: pointer;

  &:hover { transform: scale(1.05); }
  &:focus { outline: none; }
`;

/* ---------- Desktop text links ---------- */
export const Links = styled.div`
  display: none;

  @media ${media.tablet} {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  @media ${media.laptop} {
    gap: 2rem;
  }
`;

export const NavItem = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    background-color: #b78a77;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::before { top: -2px; }
  &::after  { bottom: -5px; }

  &:hover::before,
  &:hover::after { opacity: 1; }

  &:hover::before { animation: bounceUp 0.8s ease-in-out infinite alternate; }
  &:hover::after  { animation: bounceDown 0.8s ease-in-out infinite alternate; }

  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
    text-decoration-color: #b78a77;
    color: #e8e5da;
  }

  @keyframes bounceUp {
    from { transform: translateX(-50%) translateY(0); }
    to   { transform: translateX(-50%) translateY(-4px); }
  }
  @keyframes bounceDown {
    from { transform: translateX(-50%) translateY(0); }
    to   { transform: translateX(-50%) translateY(4px); }
  }

  @media ${media.mobileL} { font-size: 1rem; }
  @media ${media.tablet}  { font-size: 1rem; }
  @media ${media.laptop}  { font-size: 1.3rem; }
`;

/* ____________ MOBILE ONLY: Toggle + Menu _____________ */

/* CSS-drawn hamburger that morphs into an X */
export const MenuToggle = styled.button<{ $open: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;

  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    width: 24px;
    height: 2px;
    background: #b78a77;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  span::before,
  span::after {
    content: '';
    position: absolute;
    left: 0;
    width: 24px;
    height: 2px;
    background: #b78a77;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  span::before { top: -8px; }
  span::after  { top: 8px; }

  /* open state -> morph to X */
  ${({ $open }) =>
    $open &&
    `
    span { background: transparent; }
    span::before { top: 0; transform: rotate(45deg); }
    span::after  { top: 0; transform: rotate(-45deg); }
  `}

  @media ${media.tablet} {
    display: none;
  }
`;

export const DropDownMenu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;

  width: 80%;
  max-width: 250px;
  max-height: 100vh;
  overflow-y: auto;

  margin: 1rem;
  padding: 2rem;
  gap: 1.5rem;
  z-index: 9997;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(10, 15, 20, 1) 100%
  );
  border-radius: 25px;
  box-shadow: 0 0 5px #b78a77, 0 0 10px #b78a77;
`;
