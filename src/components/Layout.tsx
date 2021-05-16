import * as React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

import '../styles/globals.css';

const Main = styled.main`
  padding-top: 80px;
`;

export default function Layout({ pageTitle, children }) {
  return (
    <>
      {/* <HtmlHead title={''} meta={{}} /> */}

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
