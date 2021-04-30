// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Aspindo Mutual Group',
  siteUrl: 'https://aspindomutual.co.id',
  siteDescription: 'Aspindo Mutual Group website for you to understand us and our prooducts better. Get in touch now!',
  templates: {
    Post: '/blog/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: 'gridsome-plugin-gtm',
      options:{
        id:'GTM-KB8VTRF',
        enabled:true,
        debug:true
      }
    }
  ],
  icon: './src/favicon.png'
}
