const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    viewportWidth: 375,
    viewportHeight: 667,
    specPattern: "**/*.feature",
    async setupNodeEvents(on: (arg0: string, arg1: any) => void, config: any) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports/mobile",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
  },
});
