import { ReactChild } from 'react';
import HtmlHead from './HtmlHead';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactChild | JSX.Element[];
  meta?: object;
}

const Main = styled.main`
  padding-top: 80px;
`;

export function Layout({ children, meta } : LayoutProps) {
  return (
    <>
      <HtmlHead title={''} meta={{}} />

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

