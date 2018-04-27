module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: './src/setupTests.js',
  transform: { '.*': '<rootDir>/node_modules/jest-css-modules' },
};
