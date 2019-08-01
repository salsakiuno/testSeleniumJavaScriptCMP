const Page = require("./basePage");
const locator = require('../utils/locator');
const {Builder, By, until} = require('selenium-webdriver');

const searchInputSelectorId = locator.searchInputSelectorId;
const searchButtonSelector = locator.searchButtonSelectorCss;
const searchResultTitleSelector = locator.searchResultTitleId;

let searchInput, searchButton, searchResult;

Page.prototype.enterInputAndCheckResult = async function () {
  searchInput = await this.findById(searchInputSelectorId);
  searchButton = await this.findByCss(searchButtonSelector);

  searchInput.click();
  await this.write(searchInput,'test automation');
  searchButton.click();

  searchResult = await this.findById(searchResultTitleSelector);

  const result = await this.driver.wait(async function () {
    const search = await searchResult.getText('Test automation');
    return search;
  }, 5000);
  return result;
};

module.exports = Page;
