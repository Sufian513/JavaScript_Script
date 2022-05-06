const {firefox, chromium} = require ('playwright');

(async () => {
    const browser = await firefox.launch()
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');

    const firstName = await page.$('#firstName');
    const sportCheck = await page.$('#nobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEditable());
    console.log(await sportCheck.isChecked());
    console.log(await sportCheck.isVisible());
    console.log(await submitBtn.isHidden());
    console.log(await submitBtn.isVisible())
})()