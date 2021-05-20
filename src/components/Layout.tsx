import * as React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Main = styled.main`
  padding-top: 80px;
`;

interface LayoutProp {
  pageTitle: string;
  children: React.ReactChild;
}

export default function Layout({ pageTitle, children }: LayoutProp) {
  return (
    <>
      {/* <HtmlHead title={''} meta={{}} /> */}

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
