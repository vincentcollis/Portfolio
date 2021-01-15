module.exports = {
  siteMetadata: {
    title: "Vincent Collis Portfolio",
    description: "A simple portfolio site for Vincent Collis",
    url: "https://vincentcollis.com",
    image: "./src/images/profile_pic.png",
    twitterUsername: "@VincentCollis",
    author: "We Are Title Fight",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-187504345-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
      "gatsby-plugin-styled-components",
      "gatsby-transformer-sharp", 
      "gatsby-plugin-sharp"
    ],
};
