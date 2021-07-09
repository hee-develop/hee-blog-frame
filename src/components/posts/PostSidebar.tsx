import React from 'react';
import styled from 'styled-components';
import TableOfContents from './TableOfContents';

const Layout = styled.div`
  min-width: 20%;
  padding: 0.2em 0.6em;

  ${({ theme }) => theme.media.mobile`
    display: none;
  `}
`;

const FloatingSidebar = styled.aside`
  position: sticky;
  top: 60px;
`;

interface SidebarProps {
  tocHtml: string
}

export default function PostSidebar({ tocHtml }: SidebarProps) {
  return (
    <Layout>
      <FloatingSidebar>
        <TableOfContents tocHtml={tocHtml} />
      </FloatingSidebar>
    </Layout>
  );
}
