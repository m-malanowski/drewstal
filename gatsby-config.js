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
    siteUrl: "http://drewstal.com.pl",
    url: "https://drewstal.com.pl",

  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    { resolve: `gatsby-transformer-remark` },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: process.env.API_URL,
    //     // baseUrl: `drewstal.tech/backend/index.php`,
    //     // baseUrl: `localhost/mysite.com/index.php`,
    //     protocol: process.env.API_PROTOCOL,
    //     hostingWPCOM: false,
    //     restApiRoutePrefix: "wp-json",
    //   },
    // },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi-drewstal.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        // contentTypes : `projects`,
        // singleType : `private-policy`
        collectionTypes: ['projects'],
        singleTypes: ['private-policy', 'realizations'],
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        // collectionTypes: [`projects`],

        // contentTypes: [`projects`],
        // singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-CK2J2Z6HY1" // Google Analytics / GA
        ],
      },
    },

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
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`
  ],
}
