module.exports = {
  siteMetadata: {
    title: `Rising from the Ashes`,
    description: `The Chimney Tops 2 Fires Oral History Project`,
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
    `gatsby-plugin-gatsby-cloud`,
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
          credentials: 'same-origin',
        },
      },
    },
  ],
}
