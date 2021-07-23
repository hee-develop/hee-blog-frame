import React from 'react';
import TableOfContents from './TableOfContents';

import '@styles/components/posts/postSidebar.scss';

interface SidebarProps {
  tocHtml: string;
}

export default function PostSidebar({ tocHtml }: SidebarProps) {
  return (
    <div className="post-sidebar__layout">
      <aside className="post-sidebar__floating-sidebar">
        <TableOfContents tocHtml={tocHtml} />
      </aside>
    </div>
  );
}
