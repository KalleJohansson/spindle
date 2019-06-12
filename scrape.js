const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');

scrape({
    urls: ['https://app.raa.se/id/platser/'],
    directory: '/home/kajoh/Dokument/Spindle/platser',
    plugins: [ new PuppeteerPlugin() ]
});
