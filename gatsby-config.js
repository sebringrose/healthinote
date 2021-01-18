module.exports = {
  siteMetadata: {
    title: `Healthinote`,
    description: `Health information, delivered better.`,
    author: `theEmpire.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Healthinote Website`,
        short_name: `healthinote`,
        start_url: `/`,
        background_color: `#226393`,
        theme_color: `#226393`,
        display: `minimal-ui`,
        icon: `src/images/healthinote-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
