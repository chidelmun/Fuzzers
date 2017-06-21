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

driver.get('http://digitalrenter.com/login');

 for (var i = 0; i < 20 ; i++) {
 	driver.findElement(By.name('identity')).clear();
 	driver.findElement(By.name('identity')).sendKeys(i);
	driver.findElement(By.name('password')).sendKeys(i);
	driver.findElement(By.className('btn-primary')).click();
	if (i==18) {
		driver.findElement(By.name('user')).sendKeys('admin@localhost.com');
		driver.findElement(By.name('pass')).sendKeys('admin');
		driver.findElement(By.className('btn-primary')).click();
	}
	
 }

driver.findElement(By.name('user')).sendKeys('root');
driver.findElement(By.name('pass')).sendKeys('root@localhost.com');
driver.findElement(By.name('login')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 5000);
driver.quit();