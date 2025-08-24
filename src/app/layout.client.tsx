// app/LayoutClient.tsx
'use client';

import React from 'react';
import StyledComponentsRegistry from '../styles/StyledComponentsRegistry';
import GlobalStyles from '../styles/GlobalStyles';
import type { Dictionary } from '../data/i18n/types';
import Header from './[lang]/_allPageComponents/header/Header';
import Footer from './[lang]/_allPageComponents/footer/Footer';
import HashScrollManager from './[lang]/_allPageComponents/utils/HashScrollManager';

// (Option A) LayoutClient receives dict+lang from server layout
type LayoutClientProps = {
  children: React.ReactNode;
  lang: 'en' | 'no';
  dict: Dictionary;
};

export default function LayoutClient({ children, lang, dict }: LayoutClientProps) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <div lang={lang}>
        <Header dict={dict} lang={lang} />
        <HashScrollManager headerOffset={80} />
        <main>{children}</main>
        <Footer lang={lang} dict={dict.footer} />
      </div>
    </StyledComponentsRegistry>
  );
}
