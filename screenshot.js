const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless:false, slowMo: 100})
    const page = await browser.newPage();
    await page.goto('https://applitools.com/');

    await page.screenshot({path: 'fullpage.png', fullPage:true})

    const logo = await page.$('.logo');
    await logo.screenshot({path:'logo.png'})

    const text = await page.$('.header-content')
    await text.screenshot({path:'text.png'})

    await browser.close();
})()