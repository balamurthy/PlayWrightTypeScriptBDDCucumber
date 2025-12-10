import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext, chromium } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async launchBrowser() {
    this.browser = await chromium.launch({ channel: "chrome",headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.context.tracing.start({ screenshots: true, snapshots: true });

    const context = await this.browser.newContext({
    recordVideo: { dir: "test-videos/" }
    
  });
}

   async goToUrl(url: string) {
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

setWorldConstructor(CustomWorld);
