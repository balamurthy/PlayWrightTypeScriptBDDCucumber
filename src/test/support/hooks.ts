import { Before, After,Status } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import fs from "fs";
import allure from "allure-js-commons";


Before(async function (this: CustomWorld) {
  await this.launchBrowser();
  
  });


After(async function (this: CustomWorld, scenario) {
   if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({ path: `reports/screenshots/${scenario.pickle.name}.png`});
        this.attach(screenshot, "image/png");
        
  }
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
