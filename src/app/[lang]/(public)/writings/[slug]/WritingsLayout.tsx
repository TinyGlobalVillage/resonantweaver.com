// components/WritingsLayout.tsx
'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { writingsMenu } from '../../../../../data/Writings/writingsMenu';
import { useState } from 'react';

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside<{ $collapsed: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? '60px' : '250px')};
  background-color: #111;
  color: #fff;
  transition: width 0.3s;
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: #222;
`;

const MenuItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: #fff;
    text-decoration: none;
    display: block;
  }

  &:hover {
    background-color: #333;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;


export default function WritingsLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <PageWrapper>
      <Sidebar $collapsed={collapsed}>
        <SidebarHeader onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '☰' : 'Writings'}
        </SidebarHeader>
        {!collapsed &&
          writingsMenu.map((item) => (
            <MenuItem key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </MenuItem>
          ))}
      </Sidebar>
      <Content>
        {children}
      </Content>
    </PageWrapper>
  );
}
