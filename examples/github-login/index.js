require("dotenv").config();
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://github.com/login");

  await page.fill('input[name="login"]', process.env.GITHUB_USERNAME);
  await page.fill('input[name="password"]', process.env.GITHUB_PASSWORD);
  await page.click('input[value="Sign in"]');
})();
