"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const Aside = styled.aside`
  width: 260px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow-y: auto;
`;

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
  padding: 0.25rem 0;
`;

const List = styled.ul<{ open: boolean }>`
  max-height: ${({ open }) => (open ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.25s ease;
  margin: 0.5rem 0 0 0;
  padding: 0;
  list-style: none;

  & li {
    margin: 0.25rem 0;
  }
`;

type Item = { slug: string; title: string };

export default function WritingsSidebar({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(true);

  return (
    <Aside>
      <Toggle
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="writings-list"
      >
        <span>{open ? "▾" : "▸"}</span> Articles
      </Toggle>

      <List id="writings-list" open={open}>
        {items.map((i) => (
          <li key={i.slug}>
            <Link href={`/writings/${i.slug}`}>{i.title}</Link>
          </li>
        ))}
      </List>
    </Aside>
  );
}