// app/layout.tsx
import Script from 'next/script';
import { ReactNode } from 'react';
import LayoutClient from './layout.client';
import { getDictionary } from '../../hook-utils/getDictionary';
import { buildPageMetadata } from '../../hook-utils/buildPageMetadata';
import { LangParams } from '../../data/i18n/types';


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
        <LayoutClient lang={lang} dict={dict}>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}