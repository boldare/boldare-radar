/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-transformer-json", {
    resolve: "gatsby-source-filesystem",
    options: {
      path: "./src/data/"
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};
