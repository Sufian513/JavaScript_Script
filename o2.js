const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.o2.co.uk/
  await page.goto('https://www.o2.co.uk/');

  // Click text=Accept all cookies
  await page.locator('text=Accept all cookies').click();
  // Click .tier-menu-wrapper ul li a >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.o2.co.uk/shop/phones' }*/),
    page.locator('.tier-menu-wrapper ul li a').first().click()
  ]);

  // Go to https://www.o2.co.uk/shop/phones?contractType=payasyougo
  await page.goto('https://www.o2.co.uk/shop/phones?contractType=payasyougo');

  // Go to https://www.o2.co.uk/shop/phones?contractType=payasyougo#sort=content.sorting.featured
  await page.goto('https://www.o2.co.uk/shop/phones?contractType=payasyougo#sort=content.sorting.featured');

  // Go to https://www.o2.co.uk/shop/phones?contractType=payasyougo#sort=content.sorting.featured&page=1
  await page.goto('https://www.o2.co.uk/shop/phones?contractType=payasyougo#sort=content.sorting.featured&page=1');

  // Click text=Compare Compare button Doro 6620 >> span >> nth=2
  await page.locator('text=Compare Compare button Doro 6620 >> span').nth(2).click();
  // assert.equal(page.url(), 'https://www.o2.co.uk/shop/phones?contractType=payasyougo#sort=content.sorting.featured&page=1&compare=b2eb9a47-dfbe-4a19-910f-fde4ed023a13');

  // Click text=Compare Compare button OPPO A53
  await page.locator('text=Compare Compare button OPPO A53').click();
  // assert.equal(page.url(), 'https://www.o2.co.uk/shop/phones?contractType=payasyougo#sort=content.sorting.featured&page=1&compare=b2eb9a47-dfbe-4a19-910f-fde4ed023a13,35656bb9-db1f-42cd-a916-3f6a63a1439c');

  // Click text=Compare devices
  await page.locator('text=Compare devices').click();
  // assert.equal(page.url(), 'https://www.o2.co.uk/shop/compare/doro_6620-vs-oppo_a53?contractType=payasyougo');
  await browser.waitForTarget( () => false);

  // ---------------------
  await context.close();
  await browser.close();
})();