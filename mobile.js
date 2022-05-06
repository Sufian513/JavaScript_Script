const {chromium, devices} = require('playwright');
const iPhone = devices['iPhone 11'];

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 300})
    const context = browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation:{latitude: 19.432608, longitude: -99.133209},
        locale: 'fr-FR'
    });

    await browser.close();
})();