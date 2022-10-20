module.exports = {
  siteMetadata: {
    title: "My First Gatsby",
    description: "A light new gatsby application",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "g88s4od1lzmv",
        accessToken: "pPx8oqjSR9EC10Jr3NzgemtdnwzD-DKPUzUqyryIHd0"
      }
    },
    "gatsby-plugin-image"
  ],
}
