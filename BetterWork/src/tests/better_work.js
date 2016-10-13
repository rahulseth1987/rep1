var login = require('../pages/login.js');
	var action = require('../controlers/action.js');
	var properties =  require('E:/workspace/BetterWork/properties.js');
	var myGoals = require('../pages/myGoals.js');
	var reusableActions = require('../pages/reusableActions.js');
	var conversation = require('../pages/conversation.js');
	var log4js = require('E:/workspace/BetterWork/conf/node_module/log4js');
	log4js.loadAppender('file'); 
	log4js.addAppender(log4js.appenders.file('Betterworks.log'), 'logs'); 
	var logger = log4js.getLogger('logs');


describe ('Test Better_Work website Login Functionality', function() {
	
	action.browserLaunch(properties.appURL);
	
	beforeEach (function () { 
		login.loginapplication(properties.userName, properties.password);
	})
	
	//TestCase : 1 - Login To Application by providing Appropriate Application Credentials and Verify the Home Page Title.
	/*it ('Provide User Login Details', function () {
		var homePageTitle = browser.getTitle();
		homePageTitle.then(function(text){
			console.log('The Title of the Application Home Page is : ', text);
			console.log('To Check the Result Report : Refer Logs.');
		});
		expect(homePageTitle).toBe(homePageTitle);
	});*/
	
	it ('Verify that user is able to create a goal with milestone having target metrics defined for Dollars', function () {
		myGoals.selectTargetMetrics(properties.goalName, properties.milestoneName, properties.unitText, properties.targetMetricText);
		
	});
	
	/*it ('Create Nested Milestone', function () {
		myGoals.createNestedGoal(properties.goalName, properties.milestoneName, properties.nestedMilestoneName);
		
	});*/
	
	
	//TestCase : 2 - To create a new goal without milestone. 
	
	/*it ('Create a new Goal', function () {
		myGoals.createGoalWithoutMilestone(properties.goalName);	
		
	});
	
	//TestCase : 3 - To create a new goal with milestone. 
	
	it ('Create a new milestone', function () {
		myGoals.createGoalWithMilestone(properties.goalNameWithMilestone, properties.milestoneName);	
	});
	
	
	it ('Create a conversation for employee', function(){
		conversation.createConversation("Employee_Conv_Name", "Employee");	
	});
	
	it ('Create a conversation for manager', function(){
		conversation.createConversation("Manager_Conv_Name", "Manager");
	});
	
	it ('Create a conversation for employee and manager', function(){
		conversation.createConversation("Both_Conv_Name", "Both");
	});*/
	
	/*afterEach (function () {
		reusableActions.logout();	
	})*/
	
});