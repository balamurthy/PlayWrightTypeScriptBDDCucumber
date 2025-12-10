"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomWorld = void 0;
const cucumber_1 = require("@cucumber/cucumber");
const playwright_1 = require("playwright");
class CustomWorld extends cucumber_1.World {
    constructor(options) {
        super(options);
    }
    async launchBrowser() {
        this.browser = await playwright_1.chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }
    async goToUrl(url) {
        if (!this.page || this.page.isClosed()) {
            throw new Error("Page is not initialized. Did you forget to launch the browser?");
        }
        await this.page.goto(url);
    }
    async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
        }
    }
}
exports.CustomWorld = CustomWorld;
(0, cucumber_1.setWorldConstructor)(CustomWorld);
