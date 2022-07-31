const { defineConfig } = require('cypress');
//For Cypress file Download
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

//For cucumber integration
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fullstack-castronauts.herokuapp.com/',
    specPattern: ['**/*.{feature,features,cy.js}'],
    setupNodeEvents(on, config) {
      on('task', { downloadFile }); //Cypress file Download
      on('file:preprocessor', cucumber()); //For cypress cucumber preprocessor
      return config;
    },
  },
  reporter: '../node_modules/mochawesome/src/mochawesome.js',
  retries: 1,
  reporterOptions: {
    reportDir: 'reports/mocha',
    overwrite: false,
    html: false,
    json: true,
  },
  pageLoadTimeout: 30000,
  taskTimeout: 30000,
  execTimeout: 30000,
  requestTimeout: 30000,
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
});
