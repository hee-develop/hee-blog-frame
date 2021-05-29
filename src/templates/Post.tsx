import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PostTitle from '../components/posts/PostTitle'
import PostNavigator, { AnotherArticle } from '../components/posts/PostNavigator';
import TableOfContents from '../components/posts/TableOfContents';

const PostLayout = styled.div`
  display: flex;
`;

const ArticleLayout = styled.article`
  padding: 0 1.2em;
`;

const SidebarLayout = styled.aside`
  min-width: 20%;
  padding: 0.2em 0.6em;
`;

interface PostProps {
  data: {
    article: {
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }

    toc: {
      tableOfContents: string
    }

    previous: AnotherArticle
    next: AnotherArticle
  }
}

export default function Post({ data }: PostProps) {
  const post = data.article;
  const postDetails = post.frontmatter;
  const { previous: prevArticle, next: nextArticle } = data;
  const tableOfContents = data.toc.tableOfContents;

  return (
    <Layout
      pageTitle={postDetails.title}
    >
      <PostLayout>
        <ArticleLayout>
          <PostTitle title={postDetails.title} date={postDetails.date} />
          <div dangerouslySetInnerHTML={{__html: post.html}} />
          <PostNavigator prev={prevArticle} next={nextArticle} />
        </ArticleLayout>
        <SidebarLayout>
          <TableOfContents tocHtml={tableOfContents} />
        </SidebarLayout>
      </PostLayout>
    </Layout>
  );
}

export const postQuery = graphql`
  query PostBySlug(
    $id: String!
    $prevPostId: String
    $nextPostId: String
  ) {
    article: markdownRemark(id: { eq: $id }) {
      html,
      frontmatter {
        title
        date
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
