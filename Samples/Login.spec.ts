import playwrightConfig from "../playwright.config";
import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { constants } from "buffer";
import { chromium, webkit, firefox } from "playwright";



// test('login test', async () => {

//     const browser: Browser = await webkit.launch(
//         { 
//             headless: false, 
//             channel: 'webkit' 
//         });

//     const page: Page = await browser.newPage();
//     console.log("Webpage Launched");
//     await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

//     // await page.screenshot({path: 'homepage.png'});


//     const Username: Locator = page.locator('css=input[name="email"]');
//     await Username.clear();
//     await Username.fill("testdemo11@gmail.com");

//     await page.screenshot({ path: 'Username.png' })

//     const Password: Locator = page.locator('css=input[name="password"]');
//     await Password.clear();
//     await Password.fill("Test@1234");

//     const Submit: Locator = page.locator('css=input[value="Login"]');
//     await Submit.click();

//     console.log("User Logged in successfully");

//     await (page.getByRole('link', { name: "Edit your account informatio" })).click();

//     await page.screenshot({path: 'Edit accountinfo.png'});

//     await expect(page.locator('.img-responsive')).toBeVisible();
//     console.log("logo visible");

//     await page.waitForTimeout(5000);
// });