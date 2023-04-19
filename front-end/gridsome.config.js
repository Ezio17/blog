// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Snaga solutions',
  siteUrl: process.env.SITE_URL || 'https://blog.snaga-solutions.online/',
  siteDescription: 'Snaga solutions blog',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/': {
            changefreq: 'weekly',
            priority: 1.0,
          },
          '/posts/*': {
            changefreq: 'weekly',
            priority: 1.0,
          },
        },
      },
    },
  ],
  templates: {
    Post: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue',
      },
    ],
  },
};
