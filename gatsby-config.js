require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    // Used for the title template on pages other than the index site
    siteTitle: `S4kura0ne`,
    // Default title of the page
    siteTitleAlt: `Hi, S4kura0ne is here!`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Hi, S4kura0ne is here!`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://xiaze.top`,
    // Used for SEO
    siteDescription: `Professional, Cool and Amazing`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Twitter Handle
    author: `@s4kura0ne`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hi, S4kura0ne is here!`,
        short_name: `s4kura0ne`,
        description: `Professional, Cool and Amazing`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#f6ad55`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/icon-path*']
         }
      }
   },
  ].filter(Boolean),
}
