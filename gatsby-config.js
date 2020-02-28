module.exports = {
  siteMetadata: {
    title: `Candy Coded Experimental Portfolio`,
    description: `A playground to put design and coding projects up on display.`,
    author: `Tasha Zuniga`,
    menuLinks: [
      {
        name: 'code',
      },
      {
        name: 'design',
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Design',
            collection: 'design',
            map: doc => ({
              date: doc.date,
              image: doc.image,
              summary: doc.summary,
              title: doc.title,
            }),
          },
          {
            type: 'Code',
            collection: 'code',
            map: doc => ({
              image: doc.image,
              link: doc.link,
              summary: doc.summary,
              title: doc.title,
            }),
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Design',
        imagePath: 'img',
      },
    },
  ],
}
