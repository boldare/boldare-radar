/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Boldare Radar",
    siteUrl: "https://radar.bodare.company",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "prototype",
        path: `${__dirname}/data/prototype`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mvp",
        path: `${__dirname}/data/mvp`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "scaleup",
        path: `${__dirname}/data/scaleup`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
