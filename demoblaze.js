const {chromium} = require('playwright');
const expect = require('expect');

(async() => {
    const browser = await chromium.launch({headless:false})
    const page = await browser.newPage()

    await page.goto('https://demoblaze.com/');
  // Click .card-img-top >> nth=0
  await page.locator('.card-img-top').first().click();
  await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=1');
  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('text=Add to cart').click();
  await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=1#');
  // Click #cartur
  await page.locator('#cartur').click();
  await expect(page).toHaveURL('https://demoblaze.com/cart.html');
  // Click button:has-text("Place Order")
  await page.locator('button:has-text("Place Order")').click();
  // Click #name
  await page.locator('#name').click();
  // Click #name
  await page.locator('#name').click();
  // Fill #name
  await page.locator('#name').fill('muhammad sufin');
  // Press Tab
  await page.locator('#name').press('Tab');
  // Press Tab with modifiers
  await page.locator('#country').press('Shift+Tab');
  // Press ArrowRight
  await page.locator('#name').press('ArrowRight');
  // Fill #name
  await page.locator('#name').fill('muhammad sufian');
  // Press Tab
  await page.locator('#name').press('Tab');
  // Fill #country
  await page.locator('#country').fill('pakistan');
  // Press Tab
  await page.locator('#country').press('Tab');
  // Fill #city
  await page.locator('#city').fill('lahore');
  // Press Tab
  await page.locator('#city').press('Tab');
  // Fill #card
  await page.locator('#card').fill('123456789');
  // Press Tab
  await page.locator('#card').press('Tab');
  // Fill #month
  await page.locator('#month').fill('january');
  // Press Tab
  await page.locator('#month').press('Tab');
  // Fill #year
  await page.locator('#year').fill('2022');
  // Press Tab
  await page.locator('#year').press('Tab');
  // Press Tab
  await page.locator('#orderModal >> text=Close').press('Tab');
  // 0× click
  await page.locator('#orderModal form div:has-text("Country:")').click();
  // Click text=Purchase
  await page.locator('text=Purchase').click();
  // Click text=OK
  await page.locator('text=OK').click();
  await expect(page).toHaveURL('https://demoblaze.com/index.html');


})() 
