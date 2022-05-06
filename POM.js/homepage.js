exports.HomePage = class HomePage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
    }
    async validateHeading() {
       const heading =  await this.page.innerText("//tr[@class='heading3']/td");
        return heading;
    }
  }
