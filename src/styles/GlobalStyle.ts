// GlobalStyle.ts
'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
background: linear-gradient(
  145deg,
  rgba(3, 8, 6, 1) 0%,        /* Almost pure black-green */
  rgba(10, 18, 17, 1) 40%,    /* Deep slate teal */
  rgba(15, 12, 22, 1) 70%,    /* Subtle indigo-violet shadows */
  rgba(2, 2, 4, 1) 100%       /* Black with spiritual depth */
);
}


  a{
  color: #b78a77;
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
    color: #E8E5DA;
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
    font-family: 'Roboto', sans-serif;
  }

  .statement {
    font-size: 1.2rem;
    color: #E8E5DA;
    line-height: 1.3; 
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
