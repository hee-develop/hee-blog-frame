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
  grid-template-columns: 1fr 8em;
  box-sizing: content-box;
  max-height: 8em;
  border-radius: ${`${BORDER_RADIUS}px`};
  margin: 0.6em 0.4em;
  border: 1px solid #DDD;
  transition: border-color,box-shadow 0.2s linear;

  &:hover {
    box-shadow: 1px 2px 3px #858585;
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
  max-height: 3em;
  overflow-y: hidden;
  line-height: 1.4em;
  font-size: 0.9em;
  color: #777;

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 0.2em;
  `}
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
