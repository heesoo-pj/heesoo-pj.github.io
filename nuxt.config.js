const webpack = require('webpack')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // TODO : title 설정
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        content: 'telephone=no',
        name: 'format-detection'
      }
    ],
    // TODO: script 설정
    script: [{
      src: 'https://developers.kakao.com/sdk/js/kakao.min.js'
    }],
    // TODO : favicon 설정
    link: [
      //   {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: '/favicon.ico'
      // }
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/favicon.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/shared/Loading.vue',
  /*
   ** Global CSS
   */
  css: [{
    src: 'assets/scss/style.scss',
    lang: 'scss'
  }],
  styleResources: {
    // function, variables, mixin 만
    scss: [
      '@/assets/scss/base/variables.scss',
      '@/assets/scss/mixin/background.scss'
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/swiper',
      mode: 'client'
    },
    {
      src: '~/plugins/youtube'
    },
    {
      src: '~/plugins/gtm',
      mode: 'client'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    'nuxt-clipboard2'
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // 모듈 설정
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    proxy: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    modules: ['nuxt-user-agent'],

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery', // jquery alias
        _: 'lodash'
        // ...etc.
      })
    ],
    transpile: ['nano-loader', 'vue-daum-postcode']
  }
}
