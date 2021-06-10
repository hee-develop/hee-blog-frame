import * as React from 'react';
import styled from 'styled-components';
import MetaType from '../types/meta';
import Footer from './Footer';
import Header from './Header';
import SEO from './index/SEO';

const Main = styled.main`
  padding-top: 80px;
`;

type LayoutProp = {
  pageTitle?: string
  meta?: MetaType
  children: React.ReactChild | JSX.Element[]
}

export default function Layout({ pageTitle, meta, children }: LayoutProp) {
  return (
    <>
      <SEO
        {...meta}
        {...(pageTitle && { title: pageTitle })}
      />

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
