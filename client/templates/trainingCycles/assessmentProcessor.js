/**
 * Created by betha on 5/30/2016.
 */


AssessmentProcessor = {};


AssessmentProcessor.submitAssessmentRecord = function(attempt) {
     Meteor.call('submitAssessmentRecord', {attempt: attempt}, function (err, response) {
        if (err) {
        } else
        {
        }
    });
    
    var questions_count =Session.get("questions_count");
    var questions_attempted = Session.get("questions_attempted");
    var question_type =  Session.get("question_type");
   
    if(questions_attempted < questions_count){
        AssessmentProcessor.goToNextQuestionType(question_type);
    }
    else{
        var training_session_id = Session.get("training_session_id");
        AssessmentProcessor.evaluateAssessment(training_session_id);
    }
};

AssessmentProcessor.goToNextQuestionType = function(question_type) {

    if(question_type ==="True/False"){
        Router.go("trueFalse");
    }
    else  if(question_type ==="Multiple Choice"){
        Router.go("multipleChoice");
    }

};

AssessmentProcessor.evaluateAssessment = function(training_session_id) {

    Meteor.call('evaluateAssessment', {training_session_id: training_session_id}, function (err, response) {
        if (err) {
        } else
        {
        }
    });
    Router.go("assessmentResult");
};


