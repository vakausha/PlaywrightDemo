import playwrightConfig from "../playwright.config";
import { test, expect, Page, Locator, Browser } from '@playwright/test';
import { constants } from "buffer";
import { chromium, webkit, firefox } from "playwright";

test('login test', async () => {

    const browser: Browser = await chromium.launch(
        { 
            headless: false, 
            channel: 'chrome' 
        });

    const page: Page = await browser.newPage();
    console.log("Webpage Launched");
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");


    //await page.getByRole('link', { name: ' My Account' }).click();

    await page.getByText("My Account").first().click();

    //await page.locator('#top-links').getByRole('link', { name: 'Register' }).click();
        await page.getByText("Register").first().click();

    await expect (page.getByRole("heading",{name:"Register Account"})).toBeVisible();
    console.log("Info text visible");

    await page.getByRole('textbox', { name: '* First Name' }).fill("Demo1");

    await page.getByRole('textbox', { name: '* Last Name' }).fill("user1");
    await page.getByRole('textbox', { name: '* E-Mail' }).fill("demuser9009@gmail.com");
    await page.getByRole('textbox', { name: '* Telephone' }).fill("9440944000");
    await page.getByRole('textbox', { name: '* Password', exact: true }).fill("Test@1234");
    await page.getByRole('textbox', { name: '* Password Confirm' }).fill("Test@1234");
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect (page.getByRole("heading",{name:"Your Account Has Been Created!"})).toBeVisible();
    await page.screenshot({path:"Successmessage.png"});
        

});