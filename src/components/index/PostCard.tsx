import { Link } from 'gatsby';
import React from 'react';

import '@styles/components/index/postCard.scss';

type PostSampleProps = {
  path: string;
  title: string;
  writtenIn: string;
  sample?: string;
  thumbnailSrc?: string;
};

export default function PostCard({
  path,
  title,
  writtenIn,
  thumbnailSrc,
  sample,
}: PostSampleProps) {
  return (
    <Link to={path}>
      <div className="post-card__layout">
        <div className="post-card__text-area">
          <h2 className="post-card__title">{title}</h2>
          <p className="post-card__description">{sample}</p>
          <span className="post-card__written-in">{writtenIn}</span>
        </div>
        {thumbnailSrc && (
          <img className="post-card__image" src={thumbnailSrc} />
        )}
      </div>
    </Link>
  );
}
