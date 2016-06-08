/**
 * Created by betha on 5/22/2016.
 */
this.TrainingInstructionsController = RouteController.extend({
    template: "trainingInstructions",

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

Template.trainingInstructions.onCreated(function() {
    var self = this;

    this.autorun(function() {
        var training_cycle_id = Session.get("training_cycle_id");
        if(typeof training_cycle_id !=='undefined'){
            var subTrainingSubCycles = self.subscribe('trainingSubCyclesForTrainingID',training_cycle_id);
            if(!subTrainingSubCycles.ready())
                return false;
        }
    });
});

Template.trainingInstructions.onRendered(function() {

});



Template.trainingInstructions.helpers({
    trainingSubCycles:function () {
        return trainingSubCycles.find({});
    },
});

Template.trainingInstructions.events({
    'click #btn-start':function(event){
        var trainingSubCycle  =  trainingSubCycles.findOne({});

        if(typeof trainingSubCycle !=='undefined') {

            Session.setPersistent("training_sub_cycle", trainingSubCycle);
            Session.setPersistent("question_id", trainingSubCycle.question_id);
            Session.setPersistent("question_type", trainingSubCycle.question_type);
            Session.setPersistent("questions_count", trainingSubCycle.questions_count);
            Session.setPersistent("questions_attempted", 0);

            Modal.show("trainingVideo");
        }



    }
});



