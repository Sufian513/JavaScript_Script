const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch ({headless: false, slowMo : 50})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://github.com/gothinkster/react-redux-realworld-example-app')

    await page.click("#downloadButton")

    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        page.click('.octicon-file-zip')
    ])

    const path = await download.path()
    console.log(path)

    download.saveAs('D:/Playwright/playwright_qac\Work_12')
    await browser.close()
})