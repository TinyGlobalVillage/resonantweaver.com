// app/LayoutClient.tsx
'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProviderContext, useThemeContext } from '../styles/themes/ThemeContext';
import StyledComponentsRegistry from '../styles/StyledComponentsRegistry';
import GlobalStyles from '../styles/GlobalStyles';
import { Dictionary } from '@/data/i18n/types';
// import NavBar from './[lang]/_allPageComponents/nav/NavBar';
// import Footer from './[lang]/_allPageComponents/footer/Footer';

type LayoutClientProps = {
  children: React.ReactNode;
  lang: string;
  dict: Dictionary;
};

export default function LayoutClient({ children, lang,
  // dict
 }: LayoutClientProps) {
  // Now we’re in a client component, so hooks work
  const { theme } = useThemeContext();

  return (
    <ThemeProviderContext>
      <ThemeProvider theme={theme}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {/* <NavBar lang={lang} dict={dict.navigation}/> */}
          <div lang={lang}>

            {children}
            {/* <Footer /> */}
          </div>
        </StyledComponentsRegistry>
      </ThemeProvider>
    </ThemeProviderContext>
  );
}
