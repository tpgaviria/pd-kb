module.exports = {
  siteMetadata: {
    title: `PagerDuty Knowledge Base`,
    description: `Documentation on how to use the PagerDuty product.`,
    author: `@pagerduty.com`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`], 
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: [`h2`, `h3`, `h4`],
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
        ],
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-meta-redirect`,
    
  ],
}