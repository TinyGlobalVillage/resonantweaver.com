'use client';
import styled from 'styled-components';
import NavBar from '../navigation/NavBar';
import type { Dictionary } from '@/data/i18n/types';

const HeaderWrapper = styled.header`
  padding: 10px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(219, 200, 159, 0.5);
`;

const SiteTitle = styled.h1`
  padding-left: 30px;
  margin: 0;
  a { text-decoration: none; color: #e8e5da; }
`;

type HeaderProps = {
  dict: Dictionary;          // full dictionary
  lang: 'en' | 'no';
};

export default function Header({ dict, lang }: HeaderProps) {
  return (
    <HeaderWrapper role="banner" aria-label="Header" aria-labelledby="header-title">
      <SiteTitle id="header-title">
      </SiteTitle>

      {/* pass only the navigation slice to NavBar */}
      <NavBar dict={dict.navigation} lang={lang} />
    </HeaderWrapper>
  );
}