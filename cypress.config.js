const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com/',
    setupNodeEvents(on, config) {

     
      defaultCommandTimeout:10000,
      
      {
        defaultCommandTimeout:10000
      }
      
    },
  },
});
