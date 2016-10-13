var action = function() { 
	
	this.browserLaunch = function(url) {
		browser.get(url);
		browser.manage().window().maximize();
	}
	
	this.sendKeys = function(textBox, string) {
		textBox.clear();
		textBox.sendKeys(string);
	}
	
	this.click = function(element) {	
		    if(element.isPresent())
		        {
			   element.click();
		    	}    
	}
	
};

module.exports = new action();