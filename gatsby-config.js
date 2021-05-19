module.exports = {
  siteMetadata: {
    title: "hee dev blog",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "-",
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: { isTSX: true, jsxPragma: 'jsx', allExtensions: true },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./articles/",
      },
      __key: "pages",
    },
  ],
};
