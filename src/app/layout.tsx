// app/layout.tsx
import Script from 'next/script';
import { ReactNode } from 'react';
import LayoutClient from './layout.client';
import { getDictionary } from '../hook-utils/getDictionary';
import { buildPageMetadata } from '../hook-utils/buildPageMetadata';
import { LangParams } from '../data/i18n/types';


// Your project prefers params as a Promise
export async function generateMetadata(
  { params }: { params: LangParams }
) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return buildPageMetadata({ dictPage: dict.home, lang, route: '/' });
}

interface LangLayoutProps {
  children: ReactNode;
  // tell TS that params really is a promise
  // params: { lang: string };
  params: LangParams; // params is now a Promise
}


export default async function RootLayout({
  children,
  params,
}:
  LangLayoutProps
) {

  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        {/* Organization JSON-LD (can source from dict if you like) */}
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Resonant Weaver',
            url: 'https://resonantweaver.com',
            logo: 'https://resonantweaver.com/images/Logo-WC-no_txt.png',
          })}
        </Script>

        {/* Preloads */}
        {/* <link
          rel="preload"
          href="/fonts/JosefinSans-VariableFont_wght.ttf"
          as="font" type="font/ttf" crossOrigin="anonymous"
        /> */}
        {/* Hero/LCP preload if desired */}
        {/* <link rel="preload" as="image" href="/images/hero/tiny-global-village-llc-hero-with-spheres.png" /> */}

        {/* Lottie web component (if used on all pages) */}
      </head>
      <body>
        <LayoutClient lang={lang} dict={dict}>{children}</LayoutClient>
      </body>
    </html>
  );
}




/* import { ReactNode } from 'react';
import '../styles/globals.css';
import GlobalStyle from '@/src/styles/GlobalStyle';
import StyledComponentsRegistry from '@/src/lib/registry';
import Header from '@/src/app/[lang]/_allPageComponents/header/Header';
import Footer from '@/src/app/[lang]/_allPageComponents/footer/Footer';
import Script from "next/script";

export const metadata = {
  title: 'The Resonant Weaver',
  description: 'Landing page boilerplate with Next.js, TypeScript, and Styled-Components.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
<body>
  <Script id="process-polyfill" strategy="beforeInteractive">
    {`window.process = window.process || { env: { NODE_ENV: '${process.env.NODE_ENV}' } };`}
  </Script>

  <StyledComponentsRegistry>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </StyledComponentsRegistry>
</body>

    </html>
  );
} */