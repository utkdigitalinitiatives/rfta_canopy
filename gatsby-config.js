module.exports = {
  siteMetadata: {
    title: `Rising from the Ashes`,
    description: `The Chimney Tops 2 Wildfires Oral History Project`,
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
    `gatsby-plugin-fontawesome-css`,
  ],
}
