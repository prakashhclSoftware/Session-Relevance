import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://10.134.137.148:8083/webreports', { waitUntil: 'domcontentloaded' });

  // Fill in and submit the login form
  await page.type('input[name="Username"]', 'admin');
  await page.type('input[name="Password"]', 'Bigfix@2018');
  await page.click('input[type="submit"]');

  // Wait for potential redirection or other asynchronous tasks
  await page.waitForTimeout(3000);

  // Get the cookies
  const cookies = await page.cookies();
  console.log('Cookies:', cookies);

  await browser.close();
})();
