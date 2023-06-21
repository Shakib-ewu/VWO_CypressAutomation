const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://practice.cydeo.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      defaultCommandTimeout:10000,
      
      {
        defaultCommandTimeout:10000
      }
      
    },
  },
});
