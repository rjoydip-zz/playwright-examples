const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://whatsmyuseragent.org/");
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
