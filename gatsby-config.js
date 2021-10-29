module.exports = {
  siteMetadata: {
    title: `CrewBelt`,
    description: `Go from connection to construction, on demand.`,
    author: `@joshuafredrickson`,
    siteUrl: `https://crewbelt.com/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CrewBelt`,
        short_name: `CrewBelt`,
        description: `Go from connection to construction, on demand.`,
        start_url: `/`,
        background_color: `#e6e6e6`,
        theme_color: `#e6e6e6`,
        display: `standalone`,
        icon: `src/images/favicons/apple-touch-icon.png`,
        icons: [
          {
            src: `src/images/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons//android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
