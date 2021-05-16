import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';

import '../styles/default.css';

const Main = styled.main`
  padding-top: 80px;
`;

export function Layout({ pageTitle, children }) {
  return (
    <>
      {/* <HtmlHead title={''} meta={{}} /> */}

      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
}
