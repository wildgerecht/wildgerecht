module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `wildgerecht`,
    description: `wildgerecht Jagdmarketing`,
    author: `wildgerecht`,
    siteUrl: `https://www.wildgerecht.de`,
    social: {
      twitter: "",
    },
    siteVerification: {
      google: ``,
      bing: ``,
    },
    image: ``,
  },

  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://wp.wildgerecht.de/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.wildgerecht.de`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.wildgerecht.de",
        sitemap: "https://www.wildgerecht.de/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
        www: true,
        host: "www.wildgerecht.de",
        ErrorDocument: `
        ErrorDocument 401 /404.html
        ErrorDocument 404 /404.html
        ErrorDocument 500 /404.html
      `,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wildgerecht`,
        short_name: `Wildgerecht`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `content/assets/wildgerecht-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-VH4566Z1FB",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
          allowAdFeatures: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: `gatsby-plugin-smoothscroll`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        /* Font loading mode */
        mode: "async",
        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        // preconnect: ["https://fonts.gstatic.com"],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            name: ["BigNoodleTitling"],
            file: "/fonts/big_noodle_titlling.css",
          },
          {
            name: ["Zilla+Slab"],
            file: "/fonts/zilla_slab.css",
          },
        ],

        /* Web fonts. File link should point to font CSS file. */
        // web: [
        //   {
        //     name: "Zilla+Slab",
        //     file:
        //       "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500",
        //   },
        // ],
      },
    },
  ],
}
