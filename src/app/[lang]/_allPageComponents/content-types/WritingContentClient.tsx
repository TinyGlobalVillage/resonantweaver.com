// src/components/site/WritingContentClient.tsx
"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Image, { type ImageProps } from "next/image";
import styled from "styled-components";

/* ========== Markdown ![]() -> Next/Image (visually capped) ========== */
type SafeImgProps = Omit<ImageProps, "src" | "alt" | "width" | "height">;

function MDImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt = "", width, height, ...rest } = props;
  if (typeof src !== "string" || !src) return null;

  // Intrinsic dims (for optimization only). Visual width is controlled by CSS below.
  const w = width ? Number(width) : 1200;
  const h = height ? Number(height) : Math.round((w / 4) * 3);

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      sizes="(max-width: 768px) 100vw, 600px"
      style={{ display: "block", width: "min(100%, 600px)", height: "auto", borderRadius: 8 }}
      {...(rest as SafeImgProps)}
    />
  );
}

/* ========== Figure (centered image + caption, article-controlled width) ========== */
export function Figure({
  src,
  alt,
  caption,
  w = 1200,               // intrinsic (does not force visual size)
  h = 800,
  max = 600,              // visual cap; number => px, or CSS string
}: {
  src: string;
  alt: string;
  caption?: string;
  w?: number;
  h?: number;
  max?: number | string;  // e.g. 420, "min(560px, 80vw)"
}) {
  const maxCss = typeof max === "number" ? `${max}px` : max;
  return (
    <figure style={{ margin: "1.25rem 0" }}>
      <div style={{ maxWidth: maxCss, margin: "0 auto" }}>
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          sizes="(max-width: 768px) 100vw, 72ch"
          style={{ display: "block", width: "100%", height: "auto", borderRadius: 8 }}
        />
      </div>
      {caption && (
        <figcaption style={{ opacity: 0.8, fontSize: "0.92rem", marginTop: ".4rem" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ========== TwoCol (text + side image INSIDE prose width) ========== */
/* Uses plain <img> for natural height. Image column is fixed pixels. */
const Row = styled.div<{ align: "left" | "right"; widthPx: number; gap: string }>`
  display: grid;
  align-items: start;
  gap: ${({ gap }) => gap};
  grid-template-columns: ${({ align, widthPx }) =>
    align === "left" ? `${widthPx}px 1fr` : `1fr ${widthPx}px`};
  margin: 1.5rem 0;

  .img img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    display: block;
  }

  .text {
    text-align: left;  /* ✅ Always left align the text */
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export function TwoCol({
  img,
  alt,
  children,
  align = "right",
  widthPx = 400,          // tweak per use: 320–600 recommended
  gap = "1.5rem",
  caption,
}: {
  img: string;
  alt: string;
  children: React.ReactNode;
  align?: "left" | "right";
  widthPx?: number;
  gap?: string;
  caption?: string;
}) {
  const ImageBlock = (
    <div className="img">
      <img src={img} alt={alt} loading="lazy" />
      {caption && (
        <div style={{ opacity: 0.8, fontSize: "0.92rem", marginTop: ".35rem" }}>{caption}</div>
      )}
    </div>
  );

  return (
    <Row align={align} widthPx={widthPx} gap={gap} data-two-col="1">
      {align === "left" ? (
        <>
          {ImageBlock}
          <div className="text">{children}</div>
        </>
      ) : (
        <>
          <div className="text">{children}</div>
          {ImageBlock}
        </>
      )}
    </Row>
  );
}

/* ========== MDX Renderer ========== */
export function WritingContentClient({ code }: { code: string }) {
  const MDX = useMDXComponent(code);
  return <MDX components={{ img: MDImg, Figure, TwoCol }} />;
}
