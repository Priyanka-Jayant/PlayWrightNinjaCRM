import { Page,expect,Locator } from "@playwright/test";
import path from 'path';

export class BasePage {
    constructor(protected page:Page) {}

    async navigateTo(url:string){
        await this.page.goto(url);  
    }

    async verifyUrl(url: string) {
  await expect(this.page).toHaveURL(url);
}

async selectDropdownByValue(locator: Locator, value: string) {
    await locator.selectOption(value);
  }

  async verifyDropdownValue(locator: Locator, expectedValue: string) {
    await expect(locator).toHaveValue(expectedValue);
  }

     async takeScreenshot(name: string) {
    const filePath = path.join('Screenshots', `${name}-${Date.now()}.png`);

    await this.page.screenshot({
      path: filePath,
      fullPage: true,
    });
  }
}
