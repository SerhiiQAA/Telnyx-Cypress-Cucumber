const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

export default defineConfig({
  e2e: {
    baseUrl: "https://telnyx.com",
    viewportWidth: 768,
    viewportHeight: 1024,
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
      reportDir: "cypress/reports/tablet",
      overwrite: true,
      html: true,
      json: true,
      charts: true,
    },
  },
});