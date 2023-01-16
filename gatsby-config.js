/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Nick + Seb`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `Nick or Seb`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      apiToken: process.env.DATOCMS_API_TOKEN,
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `nick-seb`,
      icon: `src/images/cat.gif`, // This path is relative to the root of the site.
    }
  }]
};