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

driver.get('http://ubresources.com/join');

 // for (var i = 0; i < 20 ; i++) {
 // 	driver.findElement(By.name('username')).sendKeys(i);
	// driver.findElement(By.name('password')).sendKeys(i);
	// driver.findElement(By.className('btn-success')).click();
	// if (i==18) {
	// 	driver.findElement(By.name('user')).sendKeys('admin@localhost.com');
	// 	driver.findElement(By.name('pass')).sendKeys('admin');
	// 	driver.findElement(By.className('btn-primary')).click();
	// }
	
 // }
for(var i=0 ; i< 5 ; i++){
driver.findElement(By.name('username')).sendKeys('root');
driver.findElement(By.name('email')).sendKeys('root@localhost.com');
driver.findElement(By.name('password')).sendKeys('root1234');
driver.findElement(By.name('password')).sendKeys('root1234');
driver.findElement(By.className('btn-success')).click();
}
driver.wait(until.titleIs('webdriver - Google Search'), 5000);
driver.quit();
