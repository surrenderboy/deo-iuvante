module.exports = {
  rootUrl: 'http://localhost:3000',
  gridUrl: 'http://localhost:4444/wd/hub',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        version: '65.0.3325.181'
      }
    }
  }
};
