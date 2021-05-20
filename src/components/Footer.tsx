import * as React from 'react';
import styled from 'styled-components';

const FooterDom = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #FAF7F5;
  color: #7a7673;
  display: flex;
  align-content: center;
  width: 100%;
  padding: 0.8em;
  justify-content: center;
`;

export default function Footer() {
  const systemYear = new Date().getFullYear();

  return (
    <FooterDom>
      <div>{`© ${systemYear} hee-develop`}</div>
      <div>&nbsp;via <a href="https://www.gatsbyjs.com">Gatsby</a></div>
    </FooterDom>
  );
}
