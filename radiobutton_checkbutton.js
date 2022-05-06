const { firefox } = require('playwright');
// const { chromium } = require('playwright');


(async () => {
    //function code
    const browser = await firefox.launch({headless:false, slowMo: 100})
    // const browser = await chromium.launch({headless:false, slowMo: 100})

    // const page = await browser.newPage();
    const page = await browser.newPage();
    
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp')
    const checks = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type="checkbox"]')
    // check the second checkbox
    await checks[1].check();
    await checks[0].uncheck();

    // select the secong radio button
    const radios = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type="radio"]')
    await radios[1].checked("True");

    await page.waitForTimeout(2500)

    await browser.close();

}) ();