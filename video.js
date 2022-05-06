const { chromium} = require('playwright');
const { saveVideo } = require('playwright-video');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const context = await browser.newContext({
        recordVideo: {
            dir: "./recordings"
        }
    });
    const page = await browser.newPage();
    await saveVideo(page, 'SignIn.mp4')
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.click('button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading',{state: 'hidden'});
    await page.waitForTimeout(100)
    await browser.close();
})()