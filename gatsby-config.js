module.exports = {
  siteMetadata: {
    title: 'John Pham',
    description:
      "John Pham's personal website. John Pham is a software engineer with experience in full stack web development.",
    author: '@johnphamous',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'John Pham',
        short_name: 'John Pham',
        start_url: '/',
        background_color: '#a08ff4',
        theme_color: '#a08ff4',
        display: 'fullscreen',
        // icon: 'src/images/icon.ico', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-130975069-1',
        head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
