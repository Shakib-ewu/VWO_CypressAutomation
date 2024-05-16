const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    baseUrl: "https://rubinoshoes.com/"
    
  },
});
