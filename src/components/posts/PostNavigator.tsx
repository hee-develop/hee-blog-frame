import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigatorLayout = styled.div`
  display: flex;
  margin: 0.2em;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 100%;
  background-color: #7a7673;
  height: 1px;
  opacity: 0.8;
  margin: 1em 0.2em;
`;

type AnotherArticle = {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

interface PostProps {
  prev?: AnotherArticle
  next?: AnotherArticle
}

export default function PostNavigator({ prev, next }: PostProps) {
  if (!prev && !next) {
    return <></>;
  }

  return (
    <>
      <Line />
      <NavigatorLayout>
        {prev &&
          <Link to={`/${prev.fields.slug}`}>{`< ${prev.frontmatter.title}`}</Link>
        }
        {next &&
          <Link to={`/${next.fields.slug}`}>{`${next.frontmatter.title} >`}</Link>
        }
      </NavigatorLayout>
    </>
  );
}
