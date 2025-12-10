import { Page, Locator } from '@playwright/test';

export class homePage {
  constructor(private page: Page) {}
  loginSuccess   = this.page.locator("xpath=//*[text()='account_circle']");
  
  async getloginSuccess()  {
    try {
        await this.loginSuccess.waitFor({ state: 'visible', timeout: 5000 });
        console.log("Checking for login success - Account icon visibility",this.loginSuccess.isVisible());
        return true;
    }
    catch (error) {
        
      return false;
    }
  }
}
