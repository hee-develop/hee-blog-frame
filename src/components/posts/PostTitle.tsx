import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  margin: 0;
  font-size: 2em;
  letter-spacing: 0.01em;
`;

const WrittenIn = styled.span`
  display: block;
  margin-top: 0.4em;
  margin-left: 0.1em;
  font-size: 0.8em;
  color: #AAA;
`;

export default function PostTitle({ title, date }) {
  return (
    <>
      <H1>{title}</H1>
      <WrittenIn>{date}</WrittenIn>
    </>
  );
}
