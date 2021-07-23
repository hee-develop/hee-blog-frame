import React from 'react';

import '@styles/components/posts/tableOfContents.scss';

export default function TableOfContents({ tocHtml }: { tocHtml: string }) {
  return (
    <div className="toc__layout">
      <div className="toc__title-layout">
        <span className="toc__title">목차</span>
        <div className="toc__right-line" />
      </div>

      <div dangerouslySetInnerHTML={{ __html: tocHtml }} />
    </div>
  );
}
