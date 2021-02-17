const urljoin = require("url-join")
const siteConfig = require("./siteConfig")

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    owner: siteConfig.owner,
    description: siteConfig.description,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
    devInfo: {
      github: siteConfig.devInfo.github,
      developer: siteConfig.devInfo.developer,
      portfolio: siteConfig.devInfo.portfolio
    },
    owner: null,
    storeInfo:{
      phone: siteConfig.storeInfo.phone,
      address:{street: siteConfig.storeInfo.street,
        city: siteConfig.storeInfo.address.city,
        state: siteConfig.storeInfo.address.state,
        zip: siteConfig.storeInfo.address.zip,
      },
      hours: siteConfig.storeInfo.hours
    }
  },
  //{
  //   name: 'Tobacco Hut Centreville',
  //   shortName: 'Tobacco Hut',
  //   description: 'Tobacco Hut Centreville',
  //   url: 'https://tobacco-hut-centreville.com', // Domain of your site without prefix!
  //   prefix: '/',
  //   devInfo:{
  //     developer: 'Tiffany Abraham',
  //     github: 'boostinwrx',
  //     portfolio: 'https://tiffany-codes.com/'
  //   },
  //   author: 'Tiffany Abraham',
  //   github: 'boostinwrx',
  //   portfolio: 'https://tiffany-codes.com/'
  // }
  plugins: [

    // {

    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `irj8wjjmbwxp`,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/products`,
        name: `products`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: true,
              showCaptions: true,
              quality: 75,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({ preserve: false }),
          require("postcss-color-function")(),
          require("autoprefixer")({ browsers: ["last 2 versions"] }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/ignored.css', 'prismjs/', '/prism.css', 'docsearch.js/'], // Ignore files/folders
        purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: ``,
    //   },
    // },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
  ],
}
