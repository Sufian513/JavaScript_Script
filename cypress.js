const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.o2.co.uk/')
    await page.setViewportSize({ width: 1440, height: 821 })
    await page.waitForSelector('.navContainer > .globalNavlinksWrapper > .linksDesktop > .isNotTouch > a')
    await page.click('.navContainer > .globalNavlinksWrapper > .linksDesktop > .isNotTouch > a')
    
    await navigationPromise
    await page.waitForSelector('.at-table > .at-table-row > .at-table-column:nth-child(2) > a > .rec-cta')
    await page.click('.at-table > .at-table-row > .at-table-column:nth-child(2) > a > .rec-cta')

    await navigationPromise
    await page.waitForSelector('.dropdown-container > #capacity-dropdown > .dropdown-wrapper > .dropdown-top-section > .text-n-color')
    await page.click('.dropdown-container > #capacity-dropdown > .dropdown-wrapper > .dropdown-top-section > .text-n-color')
    await page.waitForSelector('#2_item')

    await page.click('#2_item')
    await page.waitForSelector('.stock-info-section > .stock-message > .cnc-wrapper > .cncText > div')
    await page.click('.stock-info-section > .stock-message > .cnc-wrapper > .cncText > div')
    
    await page.waitForSelector('#storePostcode')
    await page.click('#storePostcode')
    await page.waitForSelector('#input-storePostcode > .clearfix > div > #store-postcode-submit > span')
    await page.click('#input-storePostcode > .clearfix > div > #store-postcode-submit > span')

    await page.waitForSelector('.tile > #\\34 74 > .clearfix > .selectStore > .selectStoreButton')
    await page.click('.tile > #\\34 74 > .clearfix > .selectStore > .selectStoreButton')

    await page.click('.ion-compose')
    const url = await page.url()
    expect(url).toContain('editor')

    await page.goBack()
    await page.waitForTimeout(2000)

    await page.goForward()
    await page.waitForTimeout(2000)

    await page.reload()

    
    await browser.close()

})