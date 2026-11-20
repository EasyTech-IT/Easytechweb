const { defineConfig } = require("@playwright/test");

const port = 18743;
const python = process.platform === "win32" ? "python" : "python3";
const baseURL = `http://127.0.0.1:${port}`;

module.exports = defineConfig({
  testDir: "./tests/e2e",
  workers: 1,
  reporter: "list",
  use: {
    baseURL,
    browserName: "chromium",
  },
  webServer: {
    command: `${python} -m http.server ${port} --bind 127.0.0.1`,
    url: `${baseURL}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
