"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
class homePage {
    constructor(page) {
        this.page = page;
        this.loginSuccess = this.page.locator("xpath=//*[text()='account_circle']");
    }
    async getloginSuccess() {
        try {
            await this.loginSuccess.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        }
        catch (e) {
            return false;
        }
    }
}
exports.homePage = homePage;
