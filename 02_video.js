const { chromium } = require('playwright');
const expect = require('expect');
const { saveVideo } = require('playwright-video');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage()

    await saveVideo(page, 'SignIn.mp4')
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test12345')
    await page.click("form >> 'Sign in'")
    
    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')

    await browser.close()
})();