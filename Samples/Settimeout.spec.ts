import playwrightConfig from "../playwright.config";
import { test, expect, Page, Locator, Browser } from '@playwright/test';
import { constants } from "buffer";
import { chromium, webkit, firefox } from "playwright";
test.use(
  {actionTimeout:10000}
);


test('login test1', async () => {

    const browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome'
        });

    const page: Page = await browser.newPage();
    console.log("Webpage Launched");
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    
    //page.setDefaultTimeout(20000);

    await page.getByText("My Account").first().click();

    await page.getByText("Register").first().click();
    await expect(page.getByRole("heading", { name: "Register Account" })).toBeVisible();
    console.log("Info text visible");

    await page.getByRole('textbox', { name: '* First Name' }).fill("Demo1");

    await page.locator('css=input[name="agrsssee"]').check({ timeout: 4000 });

    await page.screenshot({ path: "firstname.png" });


});




test('login test2', async () => {

    const browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome'
        });

    const page: Page = await browser.newPage();
    console.log("Webpage Launched");
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   // page.setDefaultTimeout(3000);

    await page.getByText("My Account").first().click();

    await page.getByText("Register").first().click();
    await expect(page.getByRole("heading", { name: "Register Account" })).toBeVisible();
    console.log("Info text visible");

    await page.getByRole('textbox', { name: '* First Name' }).fill("Demo1");

    await page.locator('css=input[name="agrasdfghee"]').check({ timeout: 5000 });

    await page.screenshot({ path: "firstname.png" });


});