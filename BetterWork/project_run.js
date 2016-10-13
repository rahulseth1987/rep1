//Created Execution Report
var Jasmine2HtmlReporter = require('../BetterWork/conf/node_module/protractor-jasmine2-html-reporter/reportFrame.js');

// An example configuration file.
exports.config = {
  //The address of a running selenium server
  //seleniumAddress:'http://localhost:4444/wd/hub',
  //directConnect: true,
  
  chromeDriver : '../BetterWork/conf/node_module/webdriver-manager/selenium/chromedriver.exe',
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../BetterWork/src/tests/better_work.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	showColors: true,
    defaultTimeoutInterval: 30000
  },
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
        	savePath: '../BetterWork/logs/reports/'
        })
      );
   }
  
};