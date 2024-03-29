module.exports = {
  siteMetadata: {
    title: `Mega Ultra Studios`,
    description: `Mega Ultra Studios creates award-winning Short Films, Feature Films, Music Videos, and Promotional Videos.`,
    author: `Mikel-Jon West`,
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
        name: `mus`,
        short_name: `mega`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
        {
          resolve: `gatsby-source-wordpress`,
          options: {
            /*
             * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
             * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
             */
            baseUrl: `roku.megaultra.space`,
            // The protocol. This can be http or https.
            protocol: `http`,
            // Indicates whether the site is hosted on wordpress.com.
            // If false, then the assumption is made that the site is self hosted.
            // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
            // If your site is hosted on wordpress.org, then set this to false.
            hostingWPCOM: false,
            // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
            // This feature is untested for sites hosted on WordPress.com
            useACF: true,
          },
        },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
