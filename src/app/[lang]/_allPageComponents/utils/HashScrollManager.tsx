// HashScrollManager.tsx
'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function scrollWhenReady(id: string, { retries = 40, interval = 50, offset = 0 } = {}) {
  let attempts = 0;
  const tryScroll = () => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }
    if (attempts++ < retries) setTimeout(tryScroll, interval);
  };
  tryScroll();
}

export default function HashScrollManager({ headerOffset = 80 }: { headerOffset?: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ✅ Re-read the current hash AFTER navigation completes
  useEffect(() => {
    const h = window.location.hash;
    if (!h) return;
    const id = h.slice(1);
    if (id) scrollWhenReady(id, { offset: headerOffset });
  }, [pathname, searchParams, headerOffset]);

  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.slice(1);
      if (id) scrollWhenReady(id, { offset: headerOffset });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [headerOffset]);

  return null;
}