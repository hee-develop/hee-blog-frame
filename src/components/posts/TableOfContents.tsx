import React from 'react';
import styled from 'styled-components';

const TocStyle = styled.div`
  line-height: 1.6;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    * > li {
      margin-left: 1em;
    }
  }
  p {
    margin: 0;
  }

  a {
    display: block;
    position: relative;
    width: 100%;
    z-index: 0;
    font-size: 0.92em;
    letter-spacing: 0.04em;

    &:hover::before {
      opacity: 0.2;
    }

    &::before {
      position: absolute;
      bottom: 2px;
      right: 0;
      width: calc(100% + 0.2em);
      height: 4px;
      content: '';
      background: #7a7673;
      opacity: 0;
      z-index: -1;
      transition: opacity 0.1s ease-in;
    }
  }
`;

const TocTitleLayout = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  margin-bottom: 4px;
`;

const TocTitle = styled.span`
  font-weight: bold;
  min-width: 2.2em;
  margin-right: 0.2em;
  letter-spacing: 0.1em;
`;

const RightLine = styled.div`
  width: 100%;
  border-top: 1px solid #2b2725;
`;

export default function TableOfContents({ tocHtml }: { tocHtml: string }) {
  return (
    <TocStyle>
      <TocTitleLayout>
        <TocTitle>목차</TocTitle>
        <RightLine />
      </TocTitleLayout>

      <div
        dangerouslySetInnerHTML={{__html: tocHtml}}
      />
    </TocStyle>
  )
}
