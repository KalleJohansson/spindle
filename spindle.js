//const scrape = require('website-scraper');
//const PuppeteerPlugin = require('website-scraper-puppeteer');

//scrape({
//    urls: ['https://app.raa.se/id/platser/'],
//    directory: '/home/kajoh/git/spindle/platser',
//    plugins: [ new PuppeteerPlugin() ]
//});

const scrape = require('website-scraper');
const options = {
  urls: ['https://app.raa.se/id/platser/'],
  directory: '/home/kajoh/git/spindle/platser/',
};
 
// with async/await
const result = await scrape(options);
