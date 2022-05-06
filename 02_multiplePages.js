const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()

    const pageOne = await context.newPage()
    const pageTwo = await context.newPage()

    await browser.close()
})()