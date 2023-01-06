module.exports = {
  siteMetadata: {
    title: `CrewBelt®`,
    description: `Go from connection to construction, on demand.`,
    author: `@scoutbranding`,
    siteUrl: `https://crewbelt.com/`,
    portalLink: `https://app.crewbelt.com/account/sign-in`,
    appLinks: {
      microsoft: ``,
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
        name: `CrewBelt®`,
        short_name: `CrewBelt®`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-8G2FX2SJEH", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          // anonymize_ip: true,
          // cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
