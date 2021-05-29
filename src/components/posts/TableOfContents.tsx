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
    position: relative;
    z-index: 0;
    font-size: 0.92em;
    letter-spacing: 0.04em;

    &:hover::before {
      opacity: 0.2;
    }

    &::before {
      position: absolute;
      bottom: 0;
      right: 0;
      width: calc(100% + 0.2em);
      height: 6px;
      content: '';
      background: #7a7673;
      opacity: 0;
      z-index: -1;
      transition: opacity 0.1s ease-in;
    }
  }
`;

const TitleOfToc = styled.span`
  background-color: #2B2725;
  color: #FAF7F5;
  font-weight: bold;
  padding: 0.1em 0.2em;
`;

export default function TableOfContents({ tocHtml }: { tocHtml: string }) {
  return (
    <TocStyle>
      <TitleOfToc>목 차</TitleOfToc>

      <div
        dangerouslySetInnerHTML={{__html: tocHtml}}
      />
    </TocStyle>
  )
}
