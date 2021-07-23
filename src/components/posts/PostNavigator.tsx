import React from 'react';
import { Link } from 'gatsby';

import '@styles/components/posts/postNavigator.scss';

export type AnotherArticle = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

interface PostProps {
  prev?: AnotherArticle;
  next?: AnotherArticle;
}

export default function PostNavigator({ prev, next }: PostProps) {
  if (!prev && !next) {
    return <></>;
  }

  return (
    <>
      <div className="post-navigator__top-line" />
      <div className="post-navigator__layout">
        {prev && (
          <Link
            to={`/${prev.fields.slug}`}
          >{`< ${prev.frontmatter.title}`}</Link>
        )}
        {next && (
          <Link
            to={`/${next.fields.slug}`}
          >{`${next.frontmatter.title} >`}</Link>
        )}
      </div>
    </>
  );
}
