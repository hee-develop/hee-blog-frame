import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PostTitle from '../components/posts/PostTitle'

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

  return (
    <Layout
      pageTitle={postDetails.title}
    >
      <PostLayout>
        <ArticleLayout>
          <PostTitle title={postDetails.title} date={postDetails.date} />
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </ArticleLayout>
        <SidebarLayout></SidebarLayout>
      </PostLayout>
    </Layout>
  );
}

export const postQuery = graphql`
  query PostByPath($articleName: String!) {
    markdownRemark(fields: { articleName: { eq: $articleName } }) {
      html,
      frontmatter {
        title
      }
    }
  }
`;
