const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// File -> Node
exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== 'MarkdownRemark') return;

  actions.createNodeField({
    node,
    name: 'articleName',
    value: createFilePath({ node, getNode }),
  });
}


// Node -> Page
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            articleName
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Failed to load posts', result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;
  const postComponent = path.resolve('./src/templates/Post.tsx');

  posts.forEach((post, index) => {
    const prevArticleName = posts[index - 1]?.fields.articleName ?? null;
    const nextArticleName = posts[index + 1]?.fields.articleName ?? null;
    createPage({
      path: `/post${post.fields.articleName}`,
      component: postComponent,
      context: {
        prevArticleName,
        articleName: post.fields.articleName,
        nextArticleName,
      }
    });
  });
}

