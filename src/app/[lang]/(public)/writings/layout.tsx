// app/writings/layout.tsx
'use client';

import { allWritings } from 'contentlayer/generated';
import WritingsSidebar from '@/src/app/[lang]/_allPageComponents/navigation/WritingsSidebar';
import styled from 'styled-components';

const GlowScope = styled.div`
 :where(img, span > img, picture > img, figure img) {
  box-shadow: none; 
  filter: drop-shadow(0 0 8px rgba(197, 163, 255, 0.4))
          drop-shadow(0 0 16px rgba(197, 163, 255, 0.1));
  transition: filter 0.3s ease;
}

:where(img, span > img, picture > img, figure img):hover {
  filter: drop-shadow(0 0 12px rgba(197, 163, 255, 0.4))
          drop-shadow(0 0 24px rgba(197, 163, 255, 0.1));
}
`;

export default function WritingsLayout({ children }: { children: React.ReactNode }) {
  const items = [...allWritings]
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .map(p => ({ slug: p.slug, title: p.title }));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: '70vh' }}>
      <WritingsSidebar items={items} />
      {/* Only change: wrap the MDX with GlowScope */}
      <GlowScope>{children}</GlowScope>
    </div>
  );
}
