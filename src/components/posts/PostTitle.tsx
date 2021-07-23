import React from 'react';

import '@styles/components/posts/postTitle.scss';

export default function PostTitle({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <>
      <h1 className="post-title__title">{title}</h1>
      <span className="post-title__written-in">{date}</span>
    </>
  );
}
