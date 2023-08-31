/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `In Between`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // plugins: ["gatsby-plugin-postcss", "gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./src/assets/images/fav-icon.svg"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  },
  {
    /* Include plugin */
    resolve: "gatsby-omni-font-loader",
  
    /* Plugin options */
    options: {
  
      /* Font loading mode */
      mode: "async",
  
      /* Enable font loading listener to handle FOUT */
      enableListener: true,
  
      /* Preconnect URL-s. This example is for Google Fonts */
      preconnect: ["https://fonts.gstatic.com"],
  
      /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
      // custom: [
      //   {
      //     /* Exact name of the font as defied in @font-face CSS rule */
      //     name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
      //     /* Path to the font CSS file inside the "static" folder with @font-face definition */
      //     file: "/fonts/fontAwesome/css/all.min.css",
      //   },
      // ],
  
      /* Web fonts. File link should point to font CSS file. */
      web: [{
          /* Exact name of the font as defied in @font-face CSS rule */
          name: "Lato",
          /* URL to the font CSS file with @font-face definition */
          file: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  }
  ]
};