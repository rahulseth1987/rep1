var controller = function() {
	
this.elementByModel = function(enterValue) {
		model = element(by.model(enterValue));
		return model;
	}
	
	this.elementByButtonText = function(buttonText) {
		buttonTxt = element(by.buttonText(buttonText));
		return buttonTxt;	
	}
	
	this.elementBycss = function(enterValue) {
	     elementcss = element(by.css(enterValue));
	     return elementcss;
    }
	
	this.findElement = function(element) {
		browser.isElementPresent(element);
	 }
	
};

module.exports = new controller();