'use client';
import styled from 'styled-components';
import { navLinks } from '@/src/data/Nav/navLinks';
import BaseLink from '../ui/BaseLink';
import Logo from '../utils/Logo';

const HeaderWrapper = styled.header`
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, rgba(18, 53, 36, 1), rgba(0, 0, 0, 0.1));
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2rem;
  color: rgba(219, 200, 159, 0.5)
`;

const SiteTitle = styled.h1`
  padding-left: 30px;

  a {
    text-decoration: none;
    color: #e8e5da;
  }
`;

const TitleLink = styled(BaseLink)`
  font-size: 1.7rem;
`;

const Nav = styled.nav`
  padding-right: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  font-family: 'Playfair Display', serif;
`;

const NavItem = styled.li`
  position: relative;

  &:hover ul {
    display: flex;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper
      role="banner"
      aria-label= "Header"
      aria-labelledby="header-title"
      aria-describedby="header-description"
    >
      <SiteTitle>
        <TitleLink href="/" aria-label="Home">
        <Logo width={75}/>
        </TitleLink>
      </SiteTitle>

      <Nav role="navigation" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavItem key={link.label}>
            <BaseLink
              href={link.href}
              aria-expanded="false"
              aria-label={link.label}
            >
              {link.label}
            </BaseLink>
          </NavItem>
        ))}
      </Nav>
    </HeaderWrapper>
  );
}
