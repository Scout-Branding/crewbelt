module.exports = {
  siteMetadata: {
    title: `CrewBelt`,
    description: `Go from connection to construction, on demand.`,
    author: `@scoutbranding`,
    siteUrl: `https://crewbelt.com/`,
    portalLink: `https://www.crewbelt.com/account/sign-in`,
    appLinks: {
      microsoft: `https://www.microsoft.com/en-us/p/dropbox-for-s-mode/9wzdncrfj0pk`,
      ios: `https://apps.apple.com/us/app/crewbelt/id1580751891`,
    },
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [640, 768, 1024, 1280, 1536],
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 90,
        },
      },
    },
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
            src: `src/images/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
