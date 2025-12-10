"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const LoginPage_1 = require("../pages/LoginPage");
const homePage_1 = require("../pages/homePage");
const test_1 = require("@playwright/test");
let browser;
let context;
let page;
let username;
let password;
let lp;
let hp;
(0, cucumber_1.Given)('user is on the login page', async function () {
    // Write code here that turns the phrase above into concrete actions
    page = this.page;
    lp = new LoginPage_1.LoginPage(page);
    await lp.open();
    console.log("Background - user is on the login page");
});
(0, cucumber_1.Given)('User click on the login link', async function () {
    // Write code here that turns the phrase above into concrete actions
    await lp.clickLoginLink();
    console.log("Background - User clicked on the login link");
});
(0, cucumber_1.Given)('User enter the username as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`Entering username: ${string}`);
    username = string;
    await lp.setUsername(username);
});
(0, cucumber_1.Given)('User enter the password as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions  
    console.log(`Entering password: ${string}`);
    password = string;
    await lp.setPassword(password);
});
(0, cucumber_1.When)('User click on the login button', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Clicking on the login button");
    await lp.loginButton.click();
});
(0, cucumber_1.Then)('Login should be success', async function () {
    // Write code here that turns the phrase above into concrete actions
    const hp = new homePage_1.homePage(page);
    // Verify login success - account icon becomes visible
    const profileIcon = hp.getloginSuccess();
    await (0, test_1.expect)(profileIcon).resolves.toBe(true);
    console.log("Login success!");
});
(0, cucumber_1.Then)('Login should fail', async function () {
    // Write code here that turns the phrase above into concrete actions
    await (0, test_1.expect)(this.page).toHaveURL(/.*\/login/);
    // 2️⃣ Login popup remains open
    const dialog = this.page.locator('mat-dialog-container');
    await (0, test_1.expect)(dialog).toBeVisible();
    // 3️⃣ No Account/Profile icon visible
    const profileIcon = this.page.locator("//span[contains(text(),'Account')]");
    await (0, test_1.expect)(profileIcon).toHaveCount(0);
    console.log("Login failed as expected!");
});
