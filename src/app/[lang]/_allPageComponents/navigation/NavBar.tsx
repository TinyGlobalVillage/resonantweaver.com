// src/components/navigation/NavBar.tsx
'use client';

import { useEffect, useState, MouseEventHandler } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  NavbarContainer,
  NavWrapper,
  LogoLink,
  LogoWrapper,
  Links,
  MenuToggle,
  DropDownMenu,
} from './navStyles';
import NavLinks from './NavLinks';
import useResponsiveResize from '../../../../hook-utils/useResponsiveResize';
import { scaleMap } from '../../../../styles/scaleMap/_scaleMap';
import type { Dictionary } from '@/data/i18n/types';

type NavBarProps = {
  dict: Dictionary['navigation'];
  lang: string;
};

export default function NavBar({ dict, lang }: NavBarProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { logo_size } = scaleMap[currentBreakpoint];

  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // always link logo to the current language's home
  const homeHref = `/${lang}`;

  const handleLogoClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    const currentPath = pathname.replace(/\/$/, ''); // remove trailing slash
    const isAtHome = currentPath === `/${lang}`;

    if (isAtHome) {
      e.preventDefault(); // stop navigation if already at home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(homeHref);
    }
  };

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavWrapper>
        <LogoWrapper $open={menuOpen} $size={logo_size}>
          <LogoLink $open={false} href={homeHref} onClick={handleLogoClick}>
            <Image
              src="/images/Logo-WC-no_txt.png"
              alt={dict.logoAlt}
              width={logo_size}
              height={logo_size}
              style={{ objectFit: 'contain' }}
              priority
            />
          </LogoLink>
        </LogoWrapper>

        <MenuToggle $open={menuOpen} onClick={toggleMenu}>
          <span />
        </MenuToggle>

        {/* desktop links */}
        <Links>
          <NavLinks dict={dict.links} lang={lang} showHome={false} />
          {/* <LangToggle dict={dict.langToggle} /> */}
        </Links>

        {/* mobile dropdown */}
        <DropDownMenu $open={menuOpen} onClick={() => setMenuOpen(false)}>
          <NavLinks dict={dict.links} lang={lang} showHome={true} />
          {/* <LangToggle dict={dict.langToggle} /> */}
        </DropDownMenu>
      </NavWrapper>
    </NavbarContainer>
  );
}
