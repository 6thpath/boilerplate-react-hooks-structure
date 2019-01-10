const rewireLess = require('react-app-rewire-less')
const path = require('path')

module.exports = function override(config, env) {
  config = rewireLess.withLoaderOptions({
          javascriptEnabled: true
  })(config, env)

  config.resolve = {
    alias: {
      '@reducers': path.resolve(__dirname, 'src/reducers/index.js'),
      '@stores': path.resolve(__dirname, 'src/stores/index.js'),
      '@constants': path.resolve(__dirname, 'src/constants/index.js'),
      '@components': path.resolve(__dirname, 'src/components/index.js')
    },
    extensions: ['.js', 'jsx', '.json', 'mjs', '.ts', '.tsx']
  }

  return config
}