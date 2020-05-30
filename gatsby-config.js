module.exports = {
  siteMetadata: {
    title: `Candy Coded Experimental Portfolio`,
    description: `A playground to put design and coding projects up on display.`,
    author: `Tasha Zuniga`,
    menuLinks: [
      {
        name: 'github',
        link: 'https://github.com/Tashazun',
        alt: 'external github account'
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/tashazuniga/',
        alt: 'external linked in account'
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/artofobscura/',
        alt: 'external instagram account'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
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
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Design',
        imagePath: 'image',
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Code',
        imagePath: 'image',
      },
    },
  ],
}
