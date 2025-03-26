const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));
      await addCucumberPreprocessorPlugin(on, config);

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'https://telnyx.com',
    reporter: 'cypress-mochawesome-reporter', 
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true, 
    },
  },
});






// const { defineConfig } = require('cypress');
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
// const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

// module.exports = defineConfig({
//   e2e: {
//     async setupNodeEvents(on, config) {
//       on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));
//       await addCucumberPreprocessorPlugin(on, config);
//       return config;
//     },
//     specPattern: 'cypress/e2e/features/*.feature',
//     baseUrl: 'https://telnyx.com',
//   },
// });

