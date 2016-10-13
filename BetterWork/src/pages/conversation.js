var reusableActions = require('../pages/reusableActions.js');
var controller = require('../controlers/controller.js');
var action = require('../controlers/action.js');


var conversation = function (){
	
	conversationSettingsLink = controller.elementBycss('[data-ptor="user-admin-page-conversationsettings"]'); 
    newConversationBtn =  controller.elementBycss('[href="#/useradmin/conversations/template/create"]');  
	conversationNameTextBox = controller.elementByModel("templateEdit.template.name");   
    employeeRadioButton = controller.elementBycss('[value="employee"]');  
    managerRadioButton = controller.elementBycss('[value="manager"]');   
    bothRadioButton = controller.elementBycss('[value="both"]');  
    questionTextbox = controller.elementByModel("question.text");  
    submitButton = controller.elementByButtonText("Save"); 
    copypasteButton = controller.elementByButtonText("Copy & paste from above"); 
	
	this.clickConvSettings = function() {
		action.click(conversationSettingsLink);
	}
	
	this.clickConversationButton = function() {
		action.click(newConversationBtn);	
	}
	
	this.writeConversationName = function(Conv_Name) {
		action.sendKeys(conversationNameTextBox, Conv_Name);
	}
	
	this.clickEmployeeRadioButton = function() {
		 action.click(employeeRadioButton); 
	}
    
	this.clickManagerRadioButton = function() {
		 action.click(managerRadioButton);
	}
	
	this.clickBothRadioButton = function() {
		 action.click(bothRadioButton);
	}
	
	this.writeQuestionTextbox = function() {
		action.sendKeys(questionTextbox, "Quest");
	}
	
	this.clickCopypasteButton = function() {
		action.click(copypasteButton);
	}
	
	this.clickConversationSubmitButton = function() {
		action.click(submitButton);  
	}
	
    this.createConversation = function (Conv_Name, radio_btn) {
    	
		reusableActions.clickAdmin();
	    this.clickConvSettings();
		this.clickConversationButton();	
		this.writeConversationName(Conv_Name);
		
		   if (radio_btn=="Employee"){
			   this.clickEmployeeRadioButton();
		}
		   if (radio_btn=="Manager"){
			   this.clickManagerRadioButton();
		}
		   if (radio_btn=="Both"){
			   this.clickBothRadioButton();
		}
		   
		this.writeQuestionTextbox();
	    
	       if (radio_btn=="Both"){
	    	   this.clickCopypasteButton();
	    }
	      
		this.clickConversationSubmitButton();  
	}	
};

module.exports = new conversation();