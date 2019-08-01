const { describe, it, after, before } = require('mocha');
const Page = require('../lib/searchPage');
const locator = require('../utils/locator');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function TestSuite() {
    try {
        describe ('Wikipedia Test', async function() {
            this.timeout(50000);
            let page;

            beforeEach (async() => {
                page = new Page();
                await page.visit('https://www.wikipedia.org/');
            });

            afterEach (async() => {
                await page.quit();
            });

            it ('Find search box and search button and enter search input and check result', async() => {
              let result = await page.enterInputAndCheckResult();
              expect(result).to.equal('Test automation');
            });
          });
      } catch (ex) {
        console.log (new Error(ex.message));
      }
})();
