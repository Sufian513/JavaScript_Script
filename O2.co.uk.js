const { chromium } = require ('playwright');

(async () => {
    const browser = await chromium.launch({headless:false, slowMo: 100})
    const page = await browser.newPage();

    await page.goto('https://www.Vodafone.co.uk')
    await page.waitForTimeout(2500)

    await page.click("#onetrust-accept-btn-handler");
    console.log('welcome to Vodafone');

    // await page.goto('https://www.vodafone.co.uk/mobile?icmp=uk~1_consumer~topnav~1_shop~1_phones_&_tablets&linkpos=topnav~1~1~1');
    await page.click('//*[@id="GlobalStylesProvider"]/nav/div/div[2]/div[2]/div/ul/li[1]/span/button');
    // await page.click('.vfuk-Link__inherit vfuk-Link__link ');
    // await page.click(".vfuk-NavList__nav-list__link-text");
    console.log('welcome to Vodafone.co');
    await page.waitForTimeout(1200)

    //await page.click("#GlobalStylesProvider > nav > div > div.vfuk-MainBar__meganav__main-bar > div.vfuk-MainBar__meganav__main-bar__container > div > ul > li:nth-child(1) > div > div > ul > li:nth-child(1) > ul > li:nth-child(1) > a > span");

    console.log('welcome to Vodafone.co.uk');
})();
