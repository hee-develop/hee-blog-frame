import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PostTitle from '../components/posts/PostTitle'
import PostNavigator from '../components/posts/PostNavigator';

const PostLayout = styled.div`
  display: flex;
`;

const ArticleLayout = styled.article`
  padding: 0 1.2em;
`;

const SidebarLayout = styled.aside`
  min-width: 20%;
`;

export default function Post({ data }) {
  const post = data.markdownRemark;
  const postDetails = post.frontmatter;

  const { previous, next } = data;

  return (
    <Layout
      pageTitle={postDetails.title}
    >
      <PostLayout>
        <ArticleLayout>
          <PostTitle title={postDetails.title} date={postDetails.date} />
          <div dangerouslySetInnerHTML={{__html: post.html}} />
          <PostNavigator prev={previous} next={next} />
        </ArticleLayout>
        <SidebarLayout></SidebarLayout>
      </PostLayout>
    </Layout>
  );
}

export const postQuery = graphql`
  query PostBySlug(
    $id: String!
    $prevArticleId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      html,
      frontmatter {
        title
      }
    }

    previous: markdownRemark(id: { eq: $prevArticleId }) {
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
