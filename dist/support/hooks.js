"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
(0, cucumber_1.Before)(async function () {
    await this.launchBrowser();
});
(0, cucumber_1.After)(async function () {
    if (this.page && !this.page.isClosed()) {
        await this.page.close(); // Close only the page first
    }
    if (this.context) {
        await this.context.close(); // Clean context next
    }
    if (this.browser && this.browser.isConnected()) {
        await this.browser.close(); // Finally the browser
    }
});
