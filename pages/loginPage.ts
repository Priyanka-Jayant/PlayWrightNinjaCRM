import { Page,expect } from '@playwright/test';
//import { testData } from "../Data/testData";
import { BasePage } from "../base/basePage";

export class LoginPage extends BasePage {
constructor(page:Page) {
    super(page);
}
emailInput = this.page.locator("#username");
passwordInput = this.page.locator("#inputPassword");
loginButton = this.page.getByRole("button", { name: "Sign In" });

async login(username:string, password:string){
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
async verifyCampaignsText(campaignPageLabel:string) {
    await expect(this.page.locator('b',{ hasText: campaignPageLabel })).toBeVisible();
  }

}


