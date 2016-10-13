var controller = require('../controlers/controller.js');
var action = require('../controlers/action.js');

var myGoals  = function () {
	    goalNameTextBox = controller.elementBycss('[placeholder="What is the name of your goal?"]');
	    submitButtonTextBox = controller.elementByButtonText('Submit');
	    MilestoneTextBox = controller.elementBycss('[placeholder="Add a milestone"]');
	    createGoal = controller.elementBycss('[tutorial-name="goalcreate"]');
	    newGoalButton = controller.elementBycss('[data-ptor="goal-edit-child-convert-button"]'); 
	    NestedMilestoneTextBox = controller.elementBycss('.goal-edit-level-2');
	    selectUnitsDropdown = controller.elementBycss('[class="select2-arrow"]');   
	    writeUnitText = controller.elementBycss('[placeholder="Write your own"]');
	    selectDollar = controller.elementBycss('li div span');
	    targetMetric = controller.elementByModel('goalEditMilestonePanel.goal.measurement.target');
	    setCategoriesTextBox = controller.elementBycss('div div ul li input');
	    selectCategory = controller.elementBycss('[role="option"]');
	    
	
	this.clickCreateGoal = function() {
			action.click(createGoal);
	}
	    
	this.enterGoalName = function(goalName) {
		 action.sendKeys(goalNameTextBox, goalName);
	}
	
	this.clickSubmitBtn = function() {
		action.click(submitButtonTextBox);
	}
	
	this.successGoal = function() {
		var createGoalPageTitle = browser.getCurrentUrl();
		expect(createGoalPageTitle).toContain("completed");
	}
	
	this.addMilestone = function(milestoneName) {
		action.sendKeys(MilestoneTextBox, milestoneName);
	}
	
	this.addNestedMilestone = function(nestedMilestoneName) {
		action.sendKeys(NestedMilestoneTextBox, nestedMilestoneName);

	}
	
	this.clickNewGoalButton = function() {
		action.click(newGoalButton);
	}
	
	this.clickSelectUnits = function() {
		action.click(selectUnitsDropdown);
	}
	
	this.provideUnittext = function(unittext) {
		action.sendKeys(writeUnitText, unittext);
	}
	
	this.enterDollar = function() {
		action.click(selectDollar);
	}
	
	this.enterTargetMetric = function(targetmetrictext) {
		action.sendKeys(targetMetric, targetmetrictext);
	}

	
	this.setCategoryValue = function() {
		action.sendKeys(setCategoriesTextBox, "Qws");
		browser.sleep(3000);
		action.click(selectCategory);
	}
	
	this.createGoalWithoutMilestone = function(goalName) {
		this.clickCreateGoal();
		this.enterGoalName(goalName);
		this.clickSubmitBtn();
		this.successGoal();
	}	
	
	this.createGoalWithMilestone = function(goalName, milestoneName) {
		this.clickCreateGoal();
		this.enterGoalName(goalName);
		this.addMilestone(milestoneName);
		this.clickSubmitBtn();
		this.successGoal();
	}
	
	this.createNestedGoal = function(goalName, milestoneName, nestedMilestoneName){
		this.clickCreateGoal();
		this.enterGoalName(goalName);
		this.addMilestone(milestoneName);
		this.clickNewGoalButton();
	    this.addNestedMilestone(nestedMilestoneName);
		this.clickSubmitBtn();
		this.successGoal();
    }	
	
	this.selectTargetMetrics = function(goalName, milestoneName, unittext, targetmetrictext) {
		this.clickCreateGoal();
		this.enterGoalName(goalName);
		this.setCategoryValue();
		this.addMilestone(milestoneName);
		this.clickSelectUnits();
		this.provideUnittext(unittext);
		this.enterDollar();
		this.enterTargetMetric(targetmetrictext);
		this.clickSubmitBtn();
		this.successGoal();
		
	}
	
};

module.exports = new myGoals();