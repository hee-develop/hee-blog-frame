import * as React from 'react';
import { Link } from 'gatsby';

import '@styles/components/header.scss';

const pages: Array<[src: string, pageName: string]> = [
  ['/', 'Home'],
  ['/about', 'About'],
];

export default function Header() {
  return (
    <div className="header__layout">
      <Link to="/">hee dev blog</Link>
      <nav className="header__navigation">
        {pages.map((page, idx) => (
          <li className="header__anchor" key={idx}>
            <Link to={page[0]}>{page[1]}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
}
