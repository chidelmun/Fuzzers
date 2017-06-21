var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var By = webdriver.By,
    until = webdriver.until;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function randomUsername(length){
	var chars = "abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOP1234567890";
    var username = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        username += chars.charAt(i);
    }
    return username;
}

function randomEmail(length){
	var chars = "abcdefghijklmnopqrstuvwxyz_1234567890";
    var email = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        email += chars.charAt(i);
    }
    return username + "@ubresources.com";
}





driver.get('http://ubresources.com/join');
for(var i=0 ; i< 2 ; i++){
var username = randomUsername(8);
driver.findElement(By.name('username')).sendKeys(username);
console.log(username);
var email = randomEmail(6);
driver.findElement(By.name('email')).sendKeys(email);
console.log(email);
var password = randomPassword(8);										// Generate random password
driver.findElement(By.name('password')).sendKeys(password);
console.log(password);
driver.findElement(By.name('password_confirmation')).sendKeys(password);
driver.findElement(By.id('create-account')).click();
}
driver.wait(until.titleIs('webdriver - Google Search'), 5000);
driver.quit();
