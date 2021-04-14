const { defineConfig } = require('@vue/cli-service')

const publicPath = process.env.VUE_PUBLIC_PATH || '/'

module.exports = defineConfig({
  publicPath,
  chainWebpack: config => {
    // Fix scss modules configuration
    config.module
      .rule('scss')
      .oneOf('normal-modules')
      .use('css-loader')
      .tap(options => {
        options.modules = {
          localIdentName: '[name]_[local]_[hash:base64:5]',
          exportLocalsConvention: 'camelCase',
          auto: true,
        }

        return options
      })
  },
})
