const {Builder, By, until} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
let o = new chrome.Options();
//o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
o.setUserPreferences({ credential_enable_service: false });

var BasePage = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    this.quit = async function() {
        return await this.driver.quit();
    };

    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element by Id');
        return await this.driver.findElement(By.id(id));
    };

    this.findByCss = async function(css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 15000, 'Looking for element by Css');
        return await this.driver.findElement(By.css(css));
    };

    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };
};

module.exports = BasePage;
