import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://github.com/alpacadevv");
  const titleText = await page.$eval("title", el => el.textContent);
  console.log('titleText :: ', titleText);
  await browser.close();
})()
