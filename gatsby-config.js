const ARTICLE_PATH = process.env.ARTICLE_PATH || './articles/';

module.exports = {
  siteMetadata: {
    title: 'hee dev blog',
    siteUrl: 'https://hee-develop.github.io/',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'images', path: './src/images/' },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'pages', path: ARTICLE_PATH },
      __key: 'pages',
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
            }
          },
          {
            resolve: 'gatsby-remark-table-of-contents',
            options: {
              tight: true,
              ordered: true,
              fromHeading: 1,
              toHeading: 3,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              removeAccents: true,
              isIconAfterHeader: true,
              elements: ['h1','h2'],
            }
          },
          'gatsby-remark-prismjs',
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ]
      }
    },

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typescript',
      options: { isTSX: true, jsxPragma: 'jsx', allExtensions: true },
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: '-' },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
};
