import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://github.com/alpacadevv");
  const titleText = await page.$eval("title", el => el.textContent);
  console.log('titleText :: ', titleText);
  console.log('TEST-ENV: ', process.env.TEST_ENV);
  if (process.env.TEST_ENV === '***') {
    console.log('haha right!1');
  } else if (process.env.TEST_ENV === 'thisistestenv') {
    console.log('haha right!2');
  } else {
    console.log('haha right!3');
  }
  await browser.close();
})()
