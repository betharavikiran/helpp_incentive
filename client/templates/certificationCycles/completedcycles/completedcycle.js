/**
 * Created by betha on 5/22/2016.
 */
this.CompletedCycleController = RouteController.extend({
    template: "completedCycle",

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


Template.completedCycle.onCreated(function() {
    var self = this;
    this.autorun(function() {
        var subscriptionTrainingForProfile = self.subscribe('completedTrainingForProfile',"etin6CH9ojcyxgjgR");
    });
});

Template.completedCycle.helpers({
    trainingSessionCompleted:function () {
        return profileTrainingSessions.find({result:"PASS"}).fetch();
    },
    trainingSessionAttempted:function () {
        return profileTrainingSessions.find({result:"FAIL"}).fetch();
    },
});