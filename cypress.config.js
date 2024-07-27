const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/"
  },

  env: {
    info: "This is a very very string test key.",
    userName: 'Admin',
    password: '0c386e4fe0ffd3cc2844fb76d22475cd189801a9d496161df5e8a8358a0803c00660a428b00bd81a86cd928e9ab46375Pb6v6aP5VaSdPY7q9R948Q=='
  }
});
