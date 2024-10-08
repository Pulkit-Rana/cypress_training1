const { defineConfig } = require("cypress")

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "orangeHRM/reports",
    charts: true,
    reportPageTitle: "Test Results",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    ignoreVideos: false,
    videoOnFailOnly: false,
    quiet: true,
    debug: false,
  },
  defaultCommandTimeout: 80000,
  numTestsKeptInMemory: 50,
  viewportHeight: 1080,
  viewportWidth: 1920,
  retries: {
    runMode: 2,
    openMode: 3,
  },
  fixturesFolder: "orangeHRM/fixtures",
  downloadsFolder: "orangeHRM/downloads",
  screenshotOnRunFailure: true,
  screenshotsFolder: "orangeHRM/failures",
  trashAssetsBeforeRuns: true,
  video: false,
  videosFolder: "orangeHRM/videos",
  videoCompression: 20,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on) {
      require("cypress-mochawesome-reporter/plugin")(on)
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/",
    supportFile: "orangeHRM/support/e2e.js",
    specPattern: "orangeHRM/specs/**/*",
  },
  env: {
    info: "This is a very very string test key.",
    userName: "Admin",
    password:
      "0c386e4fe0ffd3cc2844fb76d22475cd189801a9d496161df5e8a8358a0803c00660a428b00bd81a86cd928e9ab46375Pb6v6aP5VaSdPY7q9R948Q==",
  },
})
