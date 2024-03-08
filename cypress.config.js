const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://saucedemo.com',
    env: {
      staging_url: 'www.facebook.com',
      production_url: 'www.instagram.com',
      orange_url: 'https://opensource-demo.orangehrmlive.com/',
      username: 'Admin',
      password: 'admin123'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout : 5000
  },
});
