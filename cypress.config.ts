import { defineConfig } from 'cypress';

//For Cypress file Download
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const browserify = require('@cypress/browserify-preprocessor');

//For cucumber integration
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

export default defineConfig({
  e2e: {
    baseUrl: 'https://fullstack-castronauts.herokuapp.com/',
    specPattern: ['**/*.{feature,features,cy.js,cy.ts}'],
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      };
      on('task', { downloadFile }); //Cypress file Download
      on('file:preprocessor', cucumber(options)); //For cypress cucumber preprocessor
      return config;
    },
    experimentalRunAllSpecs: true,
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
  experimentalStudio: true,
});
