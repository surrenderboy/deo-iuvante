const config = require('react-scripts/config/webpack.config.dev.js');
const rules = config.module.rules[2].oneOf;

module.exports = {
  module: {
    rules: [
      rules[0],
      rules[3],
      rules[4],
      {
        test: [/\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ]
  }
};
