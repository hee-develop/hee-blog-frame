import * as React from 'react';
import MetaType from '../types/meta';
import Footer from './Footer';
import Header from './Header';
import SEO from './index/SEO';

type LayoutProp = {
  pageTitle?: string;
  meta?: MetaType;
  children: React.ReactChild | JSX.Element[];
};

export default function Layout({ pageTitle, meta, children }: LayoutProp) {
  return (
    <>
      <SEO {...meta} {...(pageTitle && { title: pageTitle })} />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
