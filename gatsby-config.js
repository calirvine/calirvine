module.exports = {
  siteMetadata: {
    title: `Cal Irvine`,
    author: `Cal Irvine`,
    description: `A starter blog & portfolio for gatsby.`,
    siteUrl: `https://calirvine.com`,
    social: {
      twitter: `cal_irvine`,
      instagram: `cal_irvine`,
      github: "calirvine",
      stackoverflow: "5847354/cal-irvine",
      linkedin: "callum-irvine-58bb094b",
    },
    projects: [
      {
        title: `Gatsby Starter Blog & Portfolio!`,
        description: `Gatsby official starter with portfolio section added!`,
        url: `https://gatsby-starter-blog-and-portfolio.netlify.com/`,
        moreLinks: [
          {
            type: `Github`,
            url: `https://github.com/alisalahio/gatsby-starter-blog-and-portfolio`,
          },
        ],
      },
      {
        title: `React`,
        description: `React's homepage is created with Gatsby!`,
        url: `https://reactjs.org/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
              maxWidth: 590,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `UA-121126739-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cal Irvine bio page`,
        short_name: `Cal Irvine`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/male-technologist.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
