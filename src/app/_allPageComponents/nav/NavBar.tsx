'use client';

import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/src/data/Nav/navLinks';
import BaseLink from '../nav/BaseLink';

const NavRoot = styled.nav`
  padding-right: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  font-family: 'Playfair Display', serif;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;

  &:hover ul {
    display: flex;
  }

  /* Optional active state */
  &[data-active='true'] a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export default function Nav() {
  const pathname = usePathname();

  return (
    <NavRoot role="navigation" aria-label="Main navigation">
      <NavList role="menubar">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href || pathname?.startsWith(link.href + '/');

          return (
            <NavItem
              key={link.label}
              role="none"
              aria-current={isActive ? 'page' : undefined}
              data-active={isActive ? 'true' : 'false'}
            >
              <BaseLink
                href={link.href}
                aria-expanded="false"
                aria-label={link.label}
              >
                {link.label}
              </BaseLink>
            </NavItem>
          );
        })}
      </NavList>
    </NavRoot>
  );
}
