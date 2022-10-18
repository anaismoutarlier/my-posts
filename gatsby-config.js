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
    "gatsby-plugin-mdx"
  ],
}
