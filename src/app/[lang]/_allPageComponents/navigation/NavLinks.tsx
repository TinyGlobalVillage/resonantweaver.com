// src/components/navigation/NavLinks.tsx
'use client';

import { NavItem } from './navStyles';
import type { Dictionary } from '../../../../data/i18n/types';

type NavLinkProps = {
  dict: Dictionary['navigation']['links'];
  showHome?: boolean;
  lang: string;
};

// ─── NavLinks ────────────────────────────────────────────────────────────────
export default function NavLinks({ dict, lang, showHome = true }: NavLinkProps) {
  // convert dict object to array for mapping
  const allNavLinks = Object.entries(dict).map(([key, link]) => ({
    ...link,
    key,
  }));

  return (
    <>
      {/* Navigation Links */}
      {allNavLinks
        .filter((link) => showHome || link.key !== 'home')
        .map(({ label, href, ariaLabel }) => (
          <NavItem
            key={href}
            href={`/${lang}${href}`}
            aria-label={ariaLabel}
          >
            {label}
          </NavItem>
        ))}

      {/* Social Media Links (disabled for now)
      {socialMedia?.map(({ platform, href, ariaLabel, label }) => (
        <NavItem
          key={platform}
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {label}
        </NavItem>
      ))}
      */}
    </>
  );
}
