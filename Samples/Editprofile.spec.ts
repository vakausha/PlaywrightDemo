import { test, expect, request } from '@playwright/test';

test('edit account via API', async () => {
    const baseURL = 'https://naveenautomationlabs.com/opencart/index.php';

    // Create API request context
    const apiContext = await request.newContext();

    // Step 1: Login and get session cookie
    const loginResponse = await apiContext.post(`${baseURL}?route=account/login`, {
        form: {
            email: 'testdemo11@gmail.com',
            password: 'Test@1234'
        }
    });
    expect(loginResponse.ok()).toBeTruthy();

    // Extract cookies for authenticated requests
    // APIRequestContext does not support getting cookies directly.
    // If you need to pass cookies, extract them from the loginResponse if available:
    // const setCookieHeader = loginResponse.headers()['set-cookie'];
    // Then, add { headers: { cookie: setCookieHeader } } to your request options if needed.

    // Step 2: Generate random first name and phone number
    const firstNameLength = Math.floor(Math.random() * 8) + 6;
    const randomFirstName = Math.random().toString(36).replace(/[^a-z]/g, '').substring(0, firstNameLength);
    const randomPhone = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');

    // Step 3: Submit edit account request
    const editResponse = await apiContext.post(`${baseURL}?route=account/edit`, {
        form: {
            firstname: randomFirstName,
            telephone: randomPhone
        }
    });
    console.log(`Edited account with First Name: ${randomFirstName}, Phone: ${randomPhone}`);
    expect(editResponse.ok()).toBeTruthy();
    const body = await editResponse.text();
    expect(body).toContain('successfully updated');
});