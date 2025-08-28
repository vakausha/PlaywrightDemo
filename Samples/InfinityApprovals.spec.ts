import playwrightConfig from "../playwright.config";
import { test, expect, Page, Locator, Browser } from '@playwright/test';
import { constants } from "buffer";
import { chromium, webkit, firefox } from "playwright";

test('InfinityApprovals', async ({ page: Page }, testInfo) => {
  testInfo.setTimeout(900000);


  const browser: Browser = await chromium.launch(
    {
      headless: false,
      channel: 'chrome'
    });

  const page: Page = await browser.newPage();
  console.log("Webpage Launched");
  await page.goto("https://retailbanking1.temenos-cloud.net/apps/onlinebanking/#/AuthenticationMA/frmLogin/");
  await page.waitForTimeout(9000);

  
  //await expect(page.getByRole('heading', { name: "Welcome to Temenos Digital"})).toBeVisible();

  await page.getByRole('combobox', { name: 'Username:' }).click();
  await page.getByRole('combobox', { name: 'Username:' }).fill('rr');

  //await page.getByText('Username').first().fill("rr");
  console.log("Username entered");


  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Kony@1234');
  await page.getByText('Remember Me').click();
  await page.getByRole('combobox', { name: 'Username:' }).click();

  await page.getByRole('textbox', { name: 'Password:' }).click();

  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

  // await page.goto('https://retailbanking1.temenos-cloud.net/apps/onlinebanking/#/HomepageMA/frmDashboard');
  await page.getByRole('heading', { name: 'Accounts Overview' }).waitFor({ state: 'visible' });
  await page.getByRole('button', { name: 'Payments and Transfers' }).click();

  await page.getByRole('link', { name: 'Make a Payment' }).click();

  // Wait until account dropdown is visible
  await page.getByRole('textbox', { name: 'From (My Account)' }).waitFor();

  await page.getByRole('textbox', { name: 'From (My Account)' }).click();
  await page.getByRole('button', { name: 'Account Name Current....989' }).click();

  await page.getByRole('textbox', { name: 'Payee\'s Name' }).click();
  await page.getByRole('button', { name: 'Account Name Coca-Cola....' }).click();

   
  await page.getByRole('textbox', { name: 'Amount' }).click();
  await page.getByRole('textbox', { name: 'Amount' }).fill('1');

  //await page.getByText('Amount').focus();

  //await page.getByRole('textbox', { name: 'Amount' }).fill('1');

  await page.screenshot({ path: 'amount.png' });

//await page.getByRole('button', { name: 'Continue to confirmation' }).scrollIntoViewIfNeeded();
//await page.getByRole('button', { name: 'Continue to Acknowledgement' }).click();

const continueBtn = page.getByRole('button', { name: 'Continue to confirmation' });
await continueBtn.scrollIntoViewIfNeeded();
await expect(continueBtn).toBeVisible();
await continueBtn.click();

const continueBtn11 = page.getByRole('button', { name: 'Continue to Acknowledgement' });
await continueBtn11.scrollIntoViewIfNeeded();
await expect(continueBtn11).toBeVisible();
await continueBtn11.click();

  // Wait for final success page
  await page.getByRole('heading', { name: 'Payment Acknowledged' }).waitFor({ state: 'visible' });

  // Capture screenshot
  await page.screenshot({ path: "Payment_success_screen.png" });

  console.log("✅ Payment test completed successfully");

  await browser.close();

});