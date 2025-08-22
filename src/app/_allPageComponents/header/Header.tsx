'use client';
import styled from 'styled-components';
import Logo from '../utils/Logo';
import BaseLink from '../nav/BaseLink'; 
import Nav from '../nav/NavBar'; 

const HeaderWrapper = styled.header`
  padding: 10px 2rem; /* de-duped */
  background: linear-gradient(to bottom, rgba(18, 53, 36, 1), rgba(0, 0, 0, 0.1));
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(219, 200, 159, 0.5);
`;

const SiteTitle = styled.h1`
  padding-left: 30px;
  margin: 0;

  a {
    text-decoration: none;
    color: #e8e5da;
  }
`;

const TitleLink = styled(BaseLink)`
  font-size: 1.7rem;
`;

export default function Header() {
  return (
    <HeaderWrapper
      role="banner"
      aria-label="Header"
      aria-labelledby="header-title"
    >
      <SiteTitle id="header-title">
        <TitleLink href="/" aria-label="Home">
          <Logo width={75} />
        </TitleLink>
      </SiteTitle>

      <Nav />
    </HeaderWrapper>
  );
}
