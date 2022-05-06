const { firefox } = require('playwright');

(async () => {
    const browser = await firefox.launch({headless: false, slowMo: 200})
    const page = await browser.newPage();

    await page.goto('https://demoqa.com/frames')

    const frame = await page.frame({url:/sample/});
    const heading = await frame.$('h1');
    console.log(await heading.innerText());

    await browser.close();

})();

