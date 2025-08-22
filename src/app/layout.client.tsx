// app/LayoutClient.tsx
'use client';

import React from 'react';

type LayoutClientProps = {
  children: React.ReactNode;
};

export default function LayoutClient({ children }: LayoutClientProps) {
  return <div>{children}</div>;
}
