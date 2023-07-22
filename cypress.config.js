const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  watchForFileChanges: true,
  responseTimeout:6000,
  screenshotOnRunFailure:false,
  video:false,
  baseUrl:'https://opensource-demo.orangehrmlive.com'
  
  },
  
});
 