import * as React from 'react';

import '@styles/components/footer.scss';

export default function Footer() {
  const systemYear = new Date().getFullYear();

  return (
    <div className="footer__layout">
      <div className="footer__copyright">
        {`© ${systemYear} hee-develop`}&nbsp;via{' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </div>
  );
}
