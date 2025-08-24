"use client";

import styled from "styled-components";

const mx = "min(80ch, 100%)";

export const ArticleProse = styled.div`
  /* Theming via currentColor; easy to adapt for dark/light */
  --tone-1: color-mix(in srgb, currentColor 15%, transparent); /* hr, borders (light) */
  --tone-2: color-mix(in srgb, currentColor 10%, transparent); /* table rows */
  --code-bg: color-mix(in srgb, currentColor 15%, transparent); /* inline code bg */
  --pre-bg:  color-mix(in srgb, currentColor 18%, transparent); /* pre bg */

  /* layout */
  inline-size: 100%;
  max-inline-size: ${mx};
  margin-inline: auto;
  padding-block: 1.25rem;
  padding-inline: 1rem;
  text-wrap: pretty;
  hyphens: auto;

  /* headings */
  :where(h1, h2, h3) { line-height: 1.3; margin-block: 1.6rem .8rem; }
  h1 { font-size: clamp(1.8rem, 1.2rem + 2vw, 2.4rem); }
  h2 { font-size: clamp(1.4rem, 1rem + 1.2vw, 1.8rem); }
  h3 { font-size: clamp(1.2rem, .9rem + .8vw, 1.4rem); }

  /* links */
  a:any-link {
    text-decoration: none;
    border-bottom: 1px solid currentColor;
    transition: opacity .2s ease;
  }
  a:hover { opacity: .8; }

  /* lists */
  :where(ul, ol) { padding-inline-start: 1.25rem; margin-block: .75rem; }
  li { margin-block: .35rem; }

  /* blockquote */
  blockquote {
    margin-block: 1.2rem;
    padding: .75rem 1rem;
    border-inline-start: 3px solid var(--tone-1);
    background: color-mix(in srgb, var(--tone-1) 25%, transparent);
    border-radius: .5rem;
    font-style: italic;
  }

  /* code */
  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: .95em;
    background: var(--code-bg);
    padding: .1rem .35rem;
    border-radius: .35rem;
  }
  pre {
    overflow: auto;
    padding: .9rem 1rem;
    border-radius: .75rem;
    background: var(--pre-bg);
    margin-block: 1rem;
  }
  /* Avoid double styling when MDX emits <pre><code> */
  pre > code {
    background: transparent;
    padding: 0;
    font-size: 0.95em;
  }

  /* hr & tables */
  hr { border: none; border-top: 1px solid var(--tone-1); margin-block: 1.5rem; }
  table { inline-size: 100%; border-collapse: collapse; margin-block: 1rem; }
  :where(th, td) { border-bottom: 1px solid var(--tone-2); padding: .5rem .6rem; text-align: start; }

  /* images / figures */
  figure { margin-block: 1.25rem; }
  figcaption { opacity: .8; font-size: .92rem; margin-block-start: .4rem; }
  :where(img, picture, video) { max-inline-size: 100%; block-size: auto; border-radius: .5rem; display: block; }

  /* small screens tweak */
  @media (max-width: 700px) {
    padding-block: 1rem;
    padding-inline: .75rem;
  }
`;

export default ArticleProse;
