import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout'
import PostCard from '../components/index/PostCard';

type IndexData = {
  site: {
    siteMetadata: {
      title: string
    }
  }

  allMarkdownRemark: {
    nodes: Array<{
      // excerpt
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        title: string
        // descrpition
      }
    }>
  }
}

export default function Index({ data }: { data: IndexData }) {
  const siteTitle = data.site.siteMetadata?.title ?? 'hee dev blog';
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout pageTitle={siteTitle}>
      {posts.map((post, idx) => (
        <PostCard
          key={idx}
          path={post.fields.slug}
          title={post.frontmatter.title}
          writtenIn={post.frontmatter.date}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    # site metadata
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          # description
        }
      }
    }
  }
`;
