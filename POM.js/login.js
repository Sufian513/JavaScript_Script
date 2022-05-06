exports.LoginPage = class LoginPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
    }
    async navigate() {
      await this.page.goto('http://demo.guru99.com/v4/');
    }
    async typeUserName(text) {
      await this.page.fill("//input[@name='uid']", text);
    }
    async typePassword(text) {
        await this.page.fill("//input[@name='password']", text);
    }
    async clickLogin() {
        await this.page.click("//input[@name='btnLogin']");
    }
  }