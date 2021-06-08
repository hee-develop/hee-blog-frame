import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

type PostSampleProps = {
  path: string;
  title: string;
  writtenIn: string;
  sample?: string;
  thumbnailSrc?: string;
}

const BORDER_RADIUS = 4;

const Card = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  max-height: 12em;
  border-radius: ${`${BORDER_RADIUS}px`};
  margin: 0.6em 0.4em;
  border: 1px solid #DDD;
  transition: border-color,box-shadow 0.2s ease-in;

  &:hover {
    border-color: #2B2725;
    box-shadow: 1px 1px 2px #666564;
  }
`;

const Layout = styled.div`
  padding: 0.6em 1em;
`;

const Title = styled.h2`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 4px;
`;

const Sample = styled.p`
  margin-top: 0.2em;
  margin-bottom: 0.6em;
  font-size: 0.9em;
  color: #777;
`;

const WrittenIn = styled.span`
  display: block;
  margin-top: 0.2em;
  font-size: 0.8em;
  color: #AAA;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: ${`${BORDER_RADIUS - 1}px`};
  border-bottom-right-radius: ${`${BORDER_RADIUS - 1}px`};
`;

export default function PostCard({ path, title, writtenIn, thumbnailSrc, sample } : PostSampleProps) {
  return (
    <Link to={path}>
      <Card>
        <Layout>
          <Title>{title}</Title>
          <Sample>{sample}</Sample>
          <WrittenIn>{writtenIn}</WrittenIn>
        </Layout>
        {thumbnailSrc && <Image src={thumbnailSrc} />}
      </Card>
    </Link>
  );
}
