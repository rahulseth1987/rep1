var controller = require('../controlers/controller.js');
var action = require('../controlers/action.js');

var reusableActions  = function () {
	adminLink =  controller.elementBycss('[href="#/useradmin"]');   
	profileDropdown = controller.elementBycss('.icon.icon-caret-down');
	logoutButton = controller.elementBycss('a[ng-href="/signout/"]');
	
	this.clickAdmin = function () {
		controller.findElement(adminLink);
		action.click(adminLink);
	}
	
	this.logout = function () {
		action.click(profileDropdown);
		//browser.actions().mouseMove(element(by.css('.icon.icon-caret-down'))).perform();
		if(profileDropdown.isPresent())
			{
		action.click(logoutButton);
			}
		else 
            {
		this.logout();
            }
	}
	
	this.browserClose = function() {
		browser.close();
	}
};

module.exports = new reusableActions();