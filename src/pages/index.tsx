import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '@components/Layout';
import PostCard from '@components/index/PostCard';

type IndexData = {
  allMarkdownRemark: {
    nodes: Array<{
      // excerpt
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        title: string
        thumbnail?: {
          publicURL: string
        }
        description: string
      }
    }>
  }
}

const CardListLayout = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;

  ${({ theme }) => theme.media.mobile`
    width: 100%;
    font-size: 0.8rem;
  `}
`;

export default function Index({ data }: { data: IndexData }) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <CardListLayout>
        {posts.map((post, idx) => {
          const path = post.fields.slug;
          const meta = post.frontmatter;
          const thumbnailSrc = meta.thumbnail ? { thumbnailSrc: meta.thumbnail.publicURL } : null;

          return (
            <PostCard
              key={idx}
              path={path}
              title={meta.title}
              writtenIn={meta.date}
              sample={meta.description}
              {...thumbnailSrc}
            />
          );
        })}
      </CardListLayout>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          thumbnail {
            publicURL
          }
          description
        }
      }
    }
  }
`;
