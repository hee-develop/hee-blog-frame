import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeadDom = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  width: 100%;
  padding: 0.6em;
  font-family: monospace;
  font-size: 1.05rem;
  align-items: center;

  background-color: #fff8;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 1px #DDD6;
`;

const Navigation = styled.nav`
  display: flex;
  margin-left: auto;
`;
const PageAnchor = styled.li`
  display: inline;
  list-style: none;
  margin: 0 0.4em;
  padding: 0.1em;
  font-size: 0.9em;

  &:hover {
    text-decoration: underline;
  }
`;

const pages: Array<[src: string, pageName: string]> = [
  ['/', 'Home'],
  ['/about', 'About'],
]

export default function Header() {
  return (
    <HeadDom>
      <Link to="/">hee dev blog</Link>
      <Navigation>
        {pages.map((page, idx) => (
          <PageAnchor key={idx}>
            <Link to={page[0]}>{page[1]}</Link>
          </PageAnchor>
        ))}
      </Navigation>
    </HeadDom>
  );
}
