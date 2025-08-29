// src/components/navigation/NavBar.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { NavbarContainer, NavWrapper, LogoLink, LogoWrapper, Links, MenuToggle, DropDownMenu } from './navStyles';
import NavLinks from './NavLinks';
import useResponsiveResize from '../../../../hook-utils/useResponsiveResize';
import { scaleMap } from '../../../../styles/scaleMap/_scaleMap';
import type { Dictionary } from '../../../../data/i18n/types';

type NavBarProps = {
  dict: Dictionary['navigation'];
  lang: string;
};

export default function NavBar({ dict, lang }: NavBarProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { logo_size } = scaleMap[currentBreakpoint]

  const pathname = usePathname();
  const router = useRouter();

  const langPrefix = lang === 'en' ? '/no' : '/en';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const handleLogoClick = () => {
    const currentPath = pathname.replace(/\/$/, ''); // remove trailing slash
    const isAtHome = currentPath === `/${lang}`;

    if (isAtHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(`/${lang}`);
    }
  };

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavWrapper>
        { 
            <LogoWrapper $open={menuOpen} $size={logo_size}>
              <LogoLink $open={false} href={langPrefix} onClick={handleLogoClick}>
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
  
        }
        {/* ← insert the language toggle here */}
       { <MenuToggle $open={menuOpen} onClick={toggleMenu}>
          <span />
        </MenuToggle>
}

        {/* desktop links */}
        <Links>
          <NavLinks
            dict={dict.links}
            lang={lang}
            showHome={false}
          />
          {/* <LangToggle dict={dict.langToggle} /> */}
        </Links>

        {/* mobile dropdown */}
        <DropDownMenu $open={menuOpen}
          onClick={() => setMenuOpen(false)}
        >
          <NavLinks
            dict={dict.links}
            lang={lang}
            showHome={true}
          />
          {/* <LangToggle dict={dict.langToggle} /> */}
        </DropDownMenu>
      </NavWrapper>

    </NavbarContainer>
  );
}
