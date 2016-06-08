/**
 * Created by betha on 5/27/2016.
 */
this.TrueFalseController = RouteController.extend({
    template: "trueFalse",

    yieldTemplates: {
        /*YIELD_TEMPLATES*/
    },

    onBeforeAction: function() {
        this.next();
    },

    action: function() {

        this.render();
    },

    subscriptionSetup: function() {
        var subs = [];
        var ready = true;
        _.each(subs, function(sub) {
            if(!sub.ready())
                ready = false;
        });
        return ready;
    },

    data: function() {
        return {
            params: this.params || {}
        };
        /*DATA_FUNCTION*/
    },

    onAfterAction: function() {

    }
});

var question_id;
var question_type;
var trainingSubCycle;

Template.trueFalse.onCreated(function() {

});

Template.trueFalse.onRendered(function() {
    var self = this;

    this.autorun(function() {
        trainingSubCycle= Session.get("training_sub_cycle");
        question_id = Session.get("question_id");
        question_type = Session.get("question_type");

        var subQuestion = self.subscribe('questionForID',question_id);
        var subTrueFalse = self.subscribe('trueFalseQuestionByID',question_id);
    });
});



Template.trueFalse.helpers({
    instructions:function(){
        return trueFalseQuestions.findOne().instructions;
    },
    question:function(){
        return trueFalseQuestions.findOne().question;
    },
    trueOption:function(){
        return trueFalseQuestions.findOne().trueOption;
    },
    falseOption:function(){
        return trueFalseQuestions.findOne().falseOption;
    },
    total_questions_count:function(){
        return Session.get("questions_count");
    },
    attempted_questions_count:function(){
        return Session.get("questions_attempted")+1;
    }
    
});

Template.trueFalse.events({
    'click :button':function(event, template){
       
        var scoredMarks=0;
        var next_question_id=0;
        var next_question_type;
        var element = template.find('input:radio[name=radioOption]:checked');

        if(element===null)
            return;

        var  trueFalseQuestion = trueFalseQuestions.findOne();
        var  question = questions.findOne();

        if(typeof trueFalseQuestion !=='undefined'){

            // Assign Marks 
            if(trueFalseQuestion.answer ==  $(element).val()) {
                scoredMarks = trueFalseQuestion.marks;
                next_question_id = question.nextQuestion_Right.question_id;
                next_question_type = question.nextQuestion_Right.question_type;
            }
            else{
                scoredMarks = 0;
                next_question_id = question.nextQuestion_Wrong.question_id;
                next_question_type = question.nextQuestion_Wrong.question_type;
            }

            var questionAttempted ={
                training_session_id:Session.get("training_session_id"),
                profile_id:Session.get("profile_id"),
                training_cycle_id: trainingSubCycle.training_cycle_id,
                instructions:trueFalseQuestion.instructions,
                question_Type:"True/False",
                question:trueFalseQuestion.question,
                answer:trueFalseQuestion.answer,
                marks:trueFalseQuestion.marks,
                response:$(element).val(),
                score:scoredMarks
            };

            Session.setPersistent("question_id", next_question_id);
            Session.setPersistent("question_type", next_question_type);
            Session.setPersistent("questions_attempted", Session.get("questions_attempted")+1);
            AssessmentProcessor.submitAssessmentRecord(questionAttempted);
        }
    }
})