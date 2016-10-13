var controller = require('../controlers/controller.js');
var action = require('../controlers/action.js');

var login = function (){
	
	loginEmailBox = controller.elementByModel('email');
	loginPasswordBox = controller.elementByModel('password');
	loginButton = controller.elementBycss('.btn.btn-info.flag');
	
	this.enterLoginEmail = function (userEmailId) {	
	    action.sendKeys(loginEmailBox, userEmailId);
	}
	
	this.enterLoginPassword = function (userPassword) {
		action.sendKeys(loginPasswordBox, userPassword);
	}
	
	this.clickLoginButton = function () {
		action.click(loginButton);
	}	
	
	this.loginapplication = function (userEmailId, userPassword) {
		this.enterLoginEmail(userEmailId);
		this.clickLoginButton();
		this.enterLoginPassword(userPassword);
		this.clickLoginButton();
		
	}
	
};

module.exports = new login();
