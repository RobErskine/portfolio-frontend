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
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=6.0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:card', name:"twitter:card", content:"summary_large_image"}
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'preload', as: 'style', href: 'https://use.typekit.net/xbq1sji.css'},
      { rel: 'stylesheet', href: 'https://use.typekit.net/xbq1sji.css'}
    ],
    script: [
      {
        src: "/js/jquery.min.js",
        type: "text/javascript",
        body: false
      },
      {
        src: "/js/zdog.min.js",
        type: "text/javascript",
        body: true
      },
      {
        src: "/js/tilt.min.js",
        type: "text/javascript",
        body: false
      }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#0098d4', 
    height: '6px',
    throttle: 0
  },
  //loading: '~/components/Loading.vue',

  /*
  ** Global CSS
  */
  css:[],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: "@/plugins/prism", ssr: false }],
  /*
  ** Nuxt.js dev-modules
  */
  // buildModules: [
  //   '@nuxtjs/gtm'
  // ],
  // gtm: {
  //   id: 'GTM-WVX2KTG',
  //   pageTracking: true
  // },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
    '@nuxtjs/sitemap'
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
    routes: pages,
    fallback: true
  },
  sitemap: {
    hostname: 'https://roberskine.com',
  }
}
