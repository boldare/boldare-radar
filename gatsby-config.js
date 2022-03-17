/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Boldare radar",
    siteUrl: "https://radar.bodare.company"
  },
  plugins: ["gatsby-transformer-json", {
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
