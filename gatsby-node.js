const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// File -> Node
exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== 'MarkdownRemark') return;

  actions.createNodeField({
    node,
    name: 'slug',
    value: `post${createFilePath({ node, getNode })}`,
  });
}


// Node -> Page
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        nodes {
          id
          fields {
            slug
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
    const prevPostId = posts[index - 1]?.id ?? null;
    const nextPostId = posts[index + 1]?.id ?? null;

    createPage({
      path: post.fields.slug,
      component: postComponent,
      context: {
        id: post.id,
        prevPostId,
        nextPostId,
      }
    });
  });
}
