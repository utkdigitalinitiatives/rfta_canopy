module.exports = {
  siteMetadata: {
    title: `Images of East Tennessee`,
    description: `Featuring postcards and photographs from the mid-nineteenth century through the late-twentieth century, this collection is particularly rich in images of Knoxville. It includes pictures of airports, homes, businesses, schools, churches, hospitals, vistas, people, and the 1982 World's Fair.`,
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
