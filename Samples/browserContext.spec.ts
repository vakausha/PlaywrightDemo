import playwrightConfig from "../playwright.config";
import{test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test';
import { constants } from "buffer";
import {chromium, webkit, firefox} from "playwright";


test('login test', async()=>
    {
//const browser:Browser= await chromium.launch({headless: false, channel:'chrome'});
//const page: Page =  await browser.newPage();

const browser1:Browser= await chromium.launch({headless: false, channel:'chrome'});
const browser2:Browser= await firefox.launch({headless: false, channel:'firefox'});

const browserContext1:BrowserContext = await browser1.newContext();
//const page1: Page =  await browserContext1.newPage();

console.log("Chrome Webpage Launched");
await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

console.log ("BrowserContext2 started");
const browserContext2:BrowserContext = await browser2.newContext();
const page2: Page =  await browserContext2.newPage();

console.log("Firefox Webpage Launched");
await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

const Username1:Locator= page1.locator('css=input[name="email"]');
await Username1.clear();
await Username1.fill("testdemo11@gmail.com");

console.log("user1 entered");

const Username2:Locator= page2.locator('css=input[name="email"]');
await Username2.clear();
await Username2.fill("testdemo22@gmail.com");

console.log("user2 entered");


const Password1:Locator = page1.locator('css=input[name="password"]');
await Password1.clear();
await Password1.fill("Test@1234");

console.log("user1 password entered");


const Password2:Locator = page2.locator('css=input[name="password"]');
await Password2.clear();
await Password2.fill("Test@1234");

console.log("user2 password entered");


const Submit1:Locator = page1.locator('css=input[value="Login"]');
await Submit1.click();

console.log("User1 Logged in successfully");
await page1.waitForTimeout(5000);

const Submit2:Locator = page2.locator('css=input[value="Login"]');
await Submit2.click();

// browser Context2
console.log("User2 Logged in successfully");
await page2.waitForTimeout(5000);

//await browser2.close();
  //await browser1.close();

});