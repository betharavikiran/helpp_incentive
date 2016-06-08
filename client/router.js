/**
 * Created by betha on 5/22/2016.
 */
/**
 * Created by betha on 5/17/2016.
 */

Router.configure({
    notFoundTemplate: "notFound",
    loadingTemplate: "loading"
});


Router.map(function () {

    this.route("dashboard", {path: "/", controller: "DashboardController",action : function(){
        this.render();
    } });

    this.route("lastCycle", {path: "/lastCycle", controller: "LastCycleController",action : function(){
        this.render();
    } });

    this.route("overall", {path: "/overall", controller: "OverallController",action : function(){
        this.render();
    } });

    this.route("earnedPoints", {path: "/earnedPoints", controller: "EarnedPointsController",action : function(){
        this.render();
    } });

    this.route("stockHoldings", {path: "/stockHoldings", controller: "StockHoldingsController",action : function(){
        this.render();
    } });

    this.route("assignedCycle", {path: "/assignedCycle", controller: "AssignedCycleController",action : function(){
        this.render();
    } });

    this.route("completedCycle", {path: "/completedCycle", controller: "CompletedCycleController",action : function(){
        this.render();
    } });

    this.route("trainingInstructions", {path: "/trainingInstructions", controller: "TrainingInstructionsController",action : function(){
        this.render();
    } });

    this.route("trainingVideo", {path: "/trainingVideo", controller: "TrainingVideoController",action : function(){
        this.render();
    } });

    this.route("assessment", {path: "/assessment", controller: "AssessmentController",action : function(){
        this.render();
    } });

    this.route("trueFalse", {path: "/trueFalse",layoutTemplate: 'questionContainer', controller: "TrueFalseController",action : function(){
        this.render();
    } });

    this.route("multipleChoice", {path: "/multipleChoice",layoutTemplate: 'questionContainer', controller: "MultipleChoiceController",action : function(){
        this.render();
    } });


    this.route("assessmentResult", {path: "/assessmentResult", controller: "AssessmentResultController",action : function(){
        this.render();
    } });

    this.route("questionsSet", {path: "/questionsSet", controller: "QuestionsSetController",action : function(){
        this.render();
    } });

    this.route("sampleSurvey", {path: "/sampleSurvey", controller: "SampleSurveyController",action : function(){
        this.render();
    } });

    this.route("login", {path: "/", controller: "LoginController",action : function(){
        var currentUser = Meteor.userId();

        if(!currentUser){
            this.render();
        }else{
            Router.go('home');
        }
    } });
});
