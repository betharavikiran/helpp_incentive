/**
 * Created by betha on 5/22/2016.
 */
this.AssignedCycleController = RouteController.extend({
    template: "assignedCycle",

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

Template.assignedCycle.onCreated(function() {

});

Template.assignedCycle.onRendered(function() {
    var self = this;
    this.autorun(function() {

        var subTrainingsForProfile = self.subscribe('assignedTrainingForProfile',"etin6CH9ojcyxgjgR");

        if(!subTrainingsForProfile.ready()){
            return;
        }
    });
});


Template.assignedCycle.helpers({
    assignedTrainingSession:function () {
        return profileTrainingSessions.find().fetch();
    },
});

Template.assignedCycle.events({
    'click #btn-training':function(event){

        var trainingSession =  profileTrainingSessions.findOne();
        if(typeof trainingSession !=='undefined' ){
            Session.setPersistent("training_session_id",trainingSession._id);
            Session.setPersistent("training_cycle_id",trainingSession.training_cycle_id);
            Router.go("trainingInstructions");
        }
    }
});