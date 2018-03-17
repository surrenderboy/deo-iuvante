const config = require('react-scripts/config/webpack.config.dev.js');
const rules = config.module.rules[2].oneOf;

module.exports = {
  module: {
    rules: [rules[0], rules[3], rules[4]]
  }
};
