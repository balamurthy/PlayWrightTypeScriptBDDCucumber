"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = this.page.locator("xpath=//button[@mattooltip='Login']");
        this.usernameField = this.page.locator("input[formcontrolname='username']");
        this.passwordField = this.page.locator("input[formcontrolname='password']");
        this.loginButton = this.page.locator("xpath=//button[@type='submit']");
    }
    async open() {
        await this.page.goto('https://bookcart.azurewebsites.net');
    }
    async setUsername(user) {
        await this.usernameField.fill(user);
    }
    async setPassword(pass) {
        await this.passwordField.fill(pass);
    }
    async clickLoginLink() {
        await this.loginLink.click();
    }
    async welcomeMessage() {
        await this.page.locator("span.mat-button-wrapper").isVisible();
    }
}
exports.LoginPage = LoginPage;
