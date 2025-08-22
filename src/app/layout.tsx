import { ReactNode } from 'react';
import '../styles/globals.css';
import GlobalStyle from '@/src/styles/GlobalStyle';
import StyledComponentsRegistry from '@/src/lib/registry';
import Header from '@/src/app/_allPageComponents/header/Header';
import Footer from '@/src/app/_allPageComponents/footer/Footer';
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
}