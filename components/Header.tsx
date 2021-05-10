import styled from 'styled-components';
import Link from './Link';

const HeadDom = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  padding: 0.6em;
  font-family: monospace;
  align-items: center;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
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
      <Link href={pages[0][0]}>hee dev blog</Link>
      <Navigation>
        {pages.map((page, idx) => (
          <PageAnchor key={idx}>
            <Link href={page[0]}>{page[1]}</Link>
          </PageAnchor>
        ))}
      </Navigation>
    </HeadDom>
  );
}
