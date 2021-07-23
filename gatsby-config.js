const ARTICLE_PATH = process.env.ARTICLE_PATH || './articles/';

const BLOG_TITLE = 'hee dev blog';

module.exports = {
  siteMetadata: {
    title: BLOG_TITLE,
    siteUrl: 'https://hee-develop.github.io/',
    description: '공부한 내용 등을 정리한 블로그입니다.',
    defaultLang: 'ko',
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
              elements: ['h1','h2', 'h3'],
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            }
          }
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ]
      }
    },

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typescript',
      options: { isTSX: true, jsxPragma: 'jsx', allExtensions: true },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': './src/components/',
          '@styles': './src/styles/',
          '@images': './src/images/'
        }
      }
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: BLOG_TITLE,
        short_name: 'hee-dev',
        start_url: '/',
        // background_color: '',
        // theme_color: '',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
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
