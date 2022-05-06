const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false, slowMo: 100
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Click body
  await page.locator('body').click();

  // Go to https://todomvc.com/examples/react/#/
  await page.goto('https://todomvc.com/examples/react/#/');

  // Click [placeholder="What\ needs\ to\ be\ done\?"]
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').click();

  // Fill [placeholder="What\ needs\ to\ be\ done\?"]
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').fill('task 1');

  // Press Enter
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').press('Enter');

  // Fill [placeholder="What\ needs\ to\ be\ done\?"]
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').fill('task 2');

  // Press Enter
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').press('Enter');

  // Fill [placeholder="What\ needs\ to\ be\ done\?"]
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').fill('task 3');

  // Press Enter
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').press('Enter');

  // Check input[type="checkbox"] >> nth=1
  await page.locator('input[type="checkbox"]').nth(1).check();

  // Check input[type="checkbox"] >> nth=3
  await page.locator('input[type="checkbox"]').nth(3).check();

  // ---------------------
  await context.close();
  await browser.close();
})();