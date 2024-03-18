const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  viewportWidth: 1536,
  viewportHeight: 960,
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://beta.workmotion.com',
  },
})
