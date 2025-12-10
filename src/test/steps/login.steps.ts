import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from 'playwright';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { homePage } from '../pages/homePage';
import { expect } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let username: string;
let password: string;
let lp: LoginPage;
let hp: homePage;
 
         Given('user is on the login page', async function () {
           // Write code here that turns the phrase above into concrete actions
             page = this.page;
             lp=new LoginPage(page);
             await lp.open();
             
           console.log("Background - user is on the login page");
            
         });
        
          Given('User enter the username as {string}', async function (string) {
            // Write code here that turns the phrase above into concrete actions
            console.log(`Entering username: ${string}`);
            
            username=string;
          await lp.setUsername(username);
          });

          Given('User enter the password as {string}', async function (string) {
            // Write code here that turns the phrase above into concrete actions  
            console.log(`Entering password: ${string}`);
            password=string;
            await lp.setPassword(password);
          });
            When('User click on the login button', async function () {
            // Write code here that turns the phrase above into concrete actions
            console.log("Clicking on the login button");
            
            await lp.clickLoginButton();
            
          });
            Then('Login should be success', async function () {
           // Write code here that turns the phrase above into concrete actions
              
              const hp=new homePage(page);
              // Verify login success - account icon becomes visible
              const profileIconPresent = hp.getloginSuccess();
              debugger; //similar to breakpoint in TypeScript non cucumber Tests
              console.log(await profileIconPresent);
              expect(await profileIconPresent).toBeTruthy();
              console.log ("Login successful!");

          });

          Then('Login should fail', async function () {
           // Write code here that turns the phrase above into concrete actions
            await expect(this.page).toHaveURL(/.*\/login/);
            
            console.log("Login failed as expected!");
          });


