import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/ui/loginPage';
import { CampaignPage } from '../../pages/ui/campaignPage';
import { LoginAPI } from '../../pages/api/loginAPI';

type Fixtures = {
  loginPage: LoginPage;
  campaignPage: CampaignPage;
  token: string;
};

export const test = base.extend<Fixtures>({
  
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
 
    campaignPage: async ({ page }, use) => {  
    await use(new CampaignPage(page));
    },
    
     token: async ({ request }, use) => {
    const loginAPI = new LoginAPI(request);
    const token = await loginAPI.loginValid(); //dynamic token
    await use(token);
  },
});
export { expect };