import styled from 'styled-components';

const FooterDom = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  padding: 0.8em;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterDom>
      <span>2021 hee-develop</span>
    </FooterDom>
  );
}
