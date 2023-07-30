const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  watchForFileChanges: false,
  responseTimeout:6000,
  screenshotOnRunFailure:false,
  video:false,
  defaultCommandTimeout: 5000
  //baseUrl:'https://demoqa.com/automation-practice-form'

  // baseUrl:'https://opensource-demo.orangehrmlive.com'
  
  },
  
});
 