const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false, slowMo: 50})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://fandex.com/login')

    await page.fill('input[type = "email"]', 'fandexCbb-mm01@mailinator.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'Test@123')
    await page.press('input[type = "password"]', 'Tab')
    //await page.click('form >> "Sign in"', { position: { x: 0, y: 0}, button: 'left', modifiers: ['Shift'], force: true, timeout: 45000})
    // await page.dblclick('form >> "log-in"')
    await page.click('form >> "Log In "')

    await page.close();

}) ()


// (async() => {
//     const browser = await chromium.launch({headless:false, slowMo:50})
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto('http://todomvc.com/examples/react/#/')

//     await page.fill('.new-todo', 'Task_1')
//     await page.press('.new-todo', 'Enter')

//     await page.fill('.new-todo', 'Task_2')
//     await page.press('.new-todo', 'Enter')

//     await page.check('.toggle')
    
//     const elements = await page.$$('.toggle')
//     elements.forEach(element => element.check())
    
// }) ()