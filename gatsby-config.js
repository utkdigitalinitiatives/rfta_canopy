module.exports = {
  siteMetadata: {
    title: `Rising from the Ashes`,
    description: ``,
    author: `University of Tennessee Libraries`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [
          {
            name: 'en',
          },
        ],
        fields: [
          { name: 'label', store: true, attributes: { boost: 20 } },
          { name: 'id', store: true },
        ],
        resolvers: {
          Manifests: {
            label: node => node.label.en[0],
            id: node => node.id,
          },
        },
        filename: 'searchIndex.json',
        fetchOptions: {
          credentials: 'same-origin'
        },
      },
    },
  ],
}
