// GlobalStyle.ts
'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /* Tailwind base is still needed if you're using Tailwind alongside styled-components */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* ----------------------------------
     GLOBAL RESETS + BODY
  ---------------------------------- */
html {
  scroll-behavior: smooth;
}

[id] { scroll-margin-top: 80px; } /* match your header height */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  img, svg, video { 
    max-width: 100%; 
    height: auto; 
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    background: linear-gradient(
      145deg,
      rgba(3, 8, 6, 1) 0%,        /* Almost pure black-green */
      rgba(10, 18, 17, 1) 40%,    /* Deep slate teal */
      rgba(15, 12, 22, 1) 70%,    /* Subtle indigo-violet shadows */
      rgba(2, 2, 4, 1) 100%       /* Black with depth */
    );
      margin: 0;
      background-color: #121212;
      color: #E8E5DA;
  }

  /* ----------------------------------
     NAVIGATION STRUCTURE
  ---------------------------------- */

  a{
  color: #b78a77;
}

  h1 {
    font-size: 2.7rem;
    margin-bottom: 1rem;
    color: #b78a77;
    margin-top: -40px;
    font-family: 'Garamond', serif;
    text-shadow: 0 0 3px rgba(244, 195, 160, 0.2);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #b78a77;
    margin-top: -40px;
    font-family: 'Garamond', serif;
    text-shadow: 0 0 3px rgba(244, 195, 160, 0.2);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #b78a77;
  
    border-bottom: 1px solid rgba(129, 161, 159, 0.4);
    font-family: 'Garamond', serif;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }

  .statement {
    font-size: 1.2rem;
    color: #E8E5DA;
    line-height: 1.3; 
  }
`;

export default GlobalStyle;
