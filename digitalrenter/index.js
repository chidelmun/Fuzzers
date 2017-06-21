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

function randomUsername(length){
	var chars = "abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOP1234567890";
    var username = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        username += chars.charAt(i);
    }
    return username;
}

function randomPassword(length){
	var chars = "abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOP1234567890";
    var password = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        password += chars.charAt(i);
    }
    return password;
}

driver.get('http://digitalrenter.com/login');

 for (var i = 0; i < 20 ; i++) {
 	var username = randomUsername(6);
 	var password = randomPassword(6);
 	driver.findElement(By.name('identity')).clear();
 	driver.findElement(By.name('identity')).sendKeys(username);
	driver.findElement(By.name('password')).sendKeys(password);
	driver.findElement(By.className('btn-primary')).click();
	if (i == 10) {
		driver.findElement(By.name('identity')).clear();
 		driver.findElement(By.name('identity')).sendKeys("bot@localhost.com");
		driver.findElement(By.name('password')).sendKeys("password");
		driver.findElement(By.className('btn-primary')).click();
	}	
 }
driver.quit();