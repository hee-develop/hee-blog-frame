import * as React from 'react';
import styled from 'styled-components';

const FooterDom = styled.div`
  background-color: #FAF7F5;
  color: #7a7673;
  display: flex;
  align-content: center;
  width: 100%;
  padding: 1.6em 0.8em;
  font-size: 0.8em;
`;

const CopyrightDom = styled.div`
  margin-left: auto;
`;

export default function Footer() {
  const systemYear = new Date().getFullYear();

  return (
    <FooterDom>
      <CopyrightDom>
        {`© ${systemYear} hee-develop`}&nbsp;via <a href="https://www.gatsbyjs.com">Gatsby</a>
      </CopyrightDom>
    </FooterDom>
  );
}
