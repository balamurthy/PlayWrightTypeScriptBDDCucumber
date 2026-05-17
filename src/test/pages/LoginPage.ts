import { Page, Locator } from '@playwright/test';

export class LoginPage {
  usernameField: Locator;
  passwordField: Locator;
  loginButton: Locator;

  constructor(private page: Page) {
    this.usernameField = this.page.locator("input[formcontrolname='username']");
    this.passwordField = this.page.locator("input[formcontrolname='password']");
    this.loginButton = this.page.locator('mat-card-actions').getByRole('button', { name: 'Login' });
  }

  async open() {

    await this.page.goto('https://bookcart.azurewebsites.net/login');
  }

  async setUsername(user: string) {
    await this.usernameField.fill(user);
  }
  async setPassword(pass: string) { 
    
    await this.passwordField.fill(pass);
    
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }

  async welcomeMessage() {
    await this.page.locator("span.mat-button-wrapper").isVisible();
  }
}
