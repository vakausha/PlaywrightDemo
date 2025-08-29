import playwrightConfig from "../playwright.config";
import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { constants } from "buffer";
import { chromium, webkit, firefox } from "playwright";
const authfile = "Testdata/LoginSession.json";


test.use({ storageState: authfile });

test('MyAccount test', async ({ page }) => {
  //const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  // const browsweContext1:BrowserContext = await browser.newContext({storageState: authfile});
  // const page: Page = await browsweContext1.newPage()
  console.log ("We are in my account test ok");
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/account");
  await page.getByRole('link', { name: 'Edit your account information' }).click();
  await page.screenshot({ path: 'Account Info.png' });
  console.log("This is the last statement of MyAccount test");
});