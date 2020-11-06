/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: '.env'
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Nowoczesne Domki Letniskowe Drewniane | Gotowe Domki Całoroczne | DREWSTAL",
    description: "Nowoczesne domki letniskowe i całoroczne drewniane, gotowe domki oraz na zgłoszenie i pod wymiar. Szybkie terminy realizacji, elastyczność. Sprawdź!",
    keywords: "Domki Letniskowe, Budowa Domków Letniskowych",
    image: "src/assets/imgs/icon.png",
    siteUrl: "http://drewstal.tech",
    url: "https://www.gatsbyjs.org/",

  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    // { resolve: `gatsby-plugin-transition-link` },
    { resolve: 'gatsby-plugin-sass'},
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.API_URL,
        // baseUrl: `drewstal.tech/backend/index.php`,
        // baseUrl: `localhost/mysite.com/index.php`,
        protocol: process.env.API_PROTOCOL,
        hostingWPCOM: false,
        restApiRoutePrefix: "wp-json",
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DREWSTAl - Budowa Domków Letniskowych`,
        short_name: `DREWSTAL`,
        start_url: `/`,
        lang: `pl`,
        icon: `src/assets/imgs/icon.png`,
        background_color: `#F8F9FA`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
