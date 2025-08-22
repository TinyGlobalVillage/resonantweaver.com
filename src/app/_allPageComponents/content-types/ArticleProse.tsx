"use client";

import styled from "styled-components";

const mx = "min(80ch, 100%)";

export const ArticleProse = styled.div`
  /* layout */
  width: 100%;
  max-width: ${mx};
  margin: 0 auto;
  padding: 1.25rem 1rem;

  /* headings */
  h1, h2, h3 { line-height: 1.3; margin: 1.6rem 0 .8rem; }
  h1 { font-size: clamp(1.8rem, 1.2rem + 2vw, 2.4rem); }
  h2 { font-size: clamp(1.4rem, 1rem + 1.2vw, 1.8rem); }
  h3 { font-size: clamp(1.2rem, .9rem + .8vw, 1.4rem); }

  /* links */
  a {
    text-decoration: none;
    border-bottom: 1px solid currentColor;
    transition: opacity .2s ease;
  }
  a:hover { opacity: .8; }

  /* lists */
  ul, ol { padding-left: 1.25rem; margin: .75rem 0; }
  li { margin: .35rem 0; }

  /* blockquote */
  blockquote {
    margin: 1.2rem 0;
    padding: .75rem 1rem;
    border-left: 3px solid rgba(255,255,255,.2);
    background: rgba(255,255,255,.04);
    border-radius: .5rem;
    font-style: italic;
  }

  /* code */
  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: .95em;
    background: rgba(127,127,127,.15);
    padding: .1rem .35rem;
    border-radius: .35rem;
  }
  pre {
    overflow: auto;
    padding: .9rem 1rem;
    border-radius: .75rem;
    background: rgba(127,127,127,.18);
    margin: 1rem 0;
  }

  /* hr & tables */
  hr { border: none; border-top: 1px solid rgba(255,255,255,.15); margin: 1.5rem 0; }
  table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
  th, td { border-bottom: 1px solid rgba(255,255,255,.1); padding: .5rem .6rem; text-align: left; }

  /* images / figures */
  figure { margin: 1.25rem 0; }
  figcaption { opacity: .8; font-size: .92rem; margin-top: .4rem; }
  img, picture, video { max-width: 100%; height: auto; border-radius: .5rem; display: block; }

  /* small screens tweak */
  @media (max-width: 700px) {
    padding: 1rem .75rem;
    font-size: 1rem;
  }
`;

export default ArticleProse;
