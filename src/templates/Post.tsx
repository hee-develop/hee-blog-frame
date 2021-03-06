import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '@components/Layout';
import PostTitle from '@components/posts/PostTitle';
import PostNavigator, { AnotherArticle } from '@components/posts/PostNavigator';
import PostSidebar from '@components/posts/PostSidebar';

import '@styles/templates/post.scss';

interface PostProps {
  data: {
    article: {
      html: string;
      frontmatter: {
        title: string;
        description: string;
        date: string;
      };
    };

    toc: {
      tableOfContents: string;
    };

    previous: AnotherArticle;
    next: AnotherArticle;
  };
}

export default function Post({ data }: PostProps) {
  const post = data.article;
  const postDetails = post.frontmatter;
  const { previous: prevArticle, next: nextArticle } = data;
  const tableOfContents = data.toc.tableOfContents;

  return (
    <Layout meta={postDetails}>
      <div className="post__layout">
        <article className="post__article-layout">
          <PostTitle title={postDetails.title} date={postDetails.date} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <PostNavigator prev={prevArticle} next={nextArticle} />
        </article>

        <PostSidebar tocHtml={tableOfContents} />
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query PostBySlug($id: String!, $prevPostId: String, $nextPostId: String) {
    article: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
    toc: markdownRemark(id: { eq: $id }) {
      tableOfContents
    }

    previous: markdownRemark(id: { eq: $prevPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
