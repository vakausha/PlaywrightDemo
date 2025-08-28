import playwrightConfig from "../playwright.config";
import{test, expect, Browser, Page, Locator } from '@playwright/test';
import { constants } from "buffer";
import {chromium, webkit, firefox} from "playwright";


test('PageMethod test', async()=>
    {

const browser1:Browser= await chromium.launch({headless: false, channel:'chrome'});
const page1: Page =  await browser1.newPage();
console.log("Firefox Webpage Launched");
await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

const browser2:Browser= await chromium.launch({headless: false, channel:'chrome'});
const page2:Page=await browser2.newPage();
console.log("Chrome Webpage Launched");
await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

// await page.screenshot({path: 'homepage1.png'});

const Username:Locator= page1.locator('css=input[name="email"]');
await Username.clear();
await Username.fill("testdemo11@gmail.com");

console.log("user1 entered");

const Username2:Locator= page2.locator('css=input[name="email"]');
await Username2.clear();
await Username2.fill("testdemo22@gmail.com");
console.log("user2 entered");


const Password:Locator = page1.locator('css=input[name="password"]');
await Password.clear();
await Password.fill("Test@1234");
console.log("user1 pwd entered");


const Password2:Locator = page2.locator('css=input[name="password"]');
await Password2.clear();
await Password2.fill("Test@1234");
console.log("user2 pwd  entered");


const Submit:Locator = page1.locator('css=input[value="Login"]');
await Submit.click();
console.log("User1 Logged in successfully");
await page1.waitForTimeout(5000);

const Submit2:Locator = page2.locator('css=input[value="Login"]');
await Submit2.click();



console.log("User2 Logged in successfully");
await page2.waitForTimeout(5000);




});