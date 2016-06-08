/**
 * Created by betha on 5/23/2016.
 */
this.AssessmentController = RouteController.extend({
    template: "assessment",

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

var trainingSubCycle;


Template.assessment.onCreated(function() {
    trainingSubCycle = Session.get("training_sub_cycle");
});


Template.assessment.onRendered(function() {

});


Template.assessment.helpers({
    questions_count:function(){
        return trainingSubCycle.questions_count;
    },
});

Template.assessment.events({
    'click #btn-start':function(){
        if(typeof trainingSubCycle !=='undefined'){
            var question_type = trainingSubCycle.question_type;
            AssessmentProcessor.goToNextQuestionType(question_type);
        }
    },


});