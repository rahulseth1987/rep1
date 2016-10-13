// An example configuration file.
exports.config = {
  //The address of a runninng selenium server.
  seleniumAddress:'http://localhost:4444/wd/hub',
  //directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	  showColors: true,
    defaultTimeoutInterval: 30000
  }
};
