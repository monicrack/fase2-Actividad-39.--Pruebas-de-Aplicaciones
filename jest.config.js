module.exports = {
  preset: 'jest-puppeteer',
  testTimeout: 30000, // aumenta timeout para Puppeteer
  testMatch: [
    "**/tests/puppeteer/**/*.test.js"
  ]
};