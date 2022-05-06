const { test, expect, chromium } = require('@playwright/test');
const { LoginPage } = require('./login.js');
const { HomePage } = require('./homepage.js');



test('Guru 99 Login', async ({ page }) => {
  
   const loginPage = new LoginPage(page);

   await loginPage.navigate();
   await loginPage.typeUserName("mngr33203");
   await loginPage.typePassword("umEtyvy");
   await loginPage.clickLogin();
   
  const homePage = new HomePage(page);
  expect(await homePage.validateHeading()).toBe("Manger Id : mngr332873");

  expect(homePage).toBe('Playwright');
}
);