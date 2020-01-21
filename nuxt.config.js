var pages = require('./dynamicPages.json')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.min.js",
        type: "text/javascript",
        body: true
      },
      {
        src: "https://unpkg.com/zdog@1/dist/zdog.dist.js",
        type: "text/javascript",
        body: true
      },
      {
        src: "https://unpkg.com/tilt.js@1.1.21/dest/tilt.jquery.min.js",
        type: "text/javascript",
        body: true
      }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F29B9B' },

  /*
  ** Global CSS
  */
  css:[],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
  ],
  /*
  ** Apollo graphql wrapper
  */
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: '@/apollo-config.js',
      //default: {
        // required  
        //httpEndpoint: 'https://portfolio-staging.roberskine.com/api', // live,
        //httpEndpoint: 'http://portfolio.test/api' // dev
      //},
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  styleResources: {
    scss: [
      'src/scss/_variables.scss'
    ]
  },
  generate: {
    routes: pages
  }
}
