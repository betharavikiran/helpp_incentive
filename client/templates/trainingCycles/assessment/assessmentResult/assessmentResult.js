/**
 * Created by betha on 5/30/2016.
 */
/**
 * Created by betha on 5/27/2016.
 */
this.AssessmentResultController = RouteController.extend({
    template: "assessmentResult",

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

var training_session_id

Template.assessmentResult.onCreated(function() {
    training_session_id= Session.get("training_session_id");
});

Template.assessmentResult.onRendered(function() {
    var self = this;

    this.autorun(function() {
       var subSessionResult = self.subscribe('trainingSessionResult',training_session_id);
    });
});


Template.assessmentResult.helpers({

    profileTrainingSession:function(){
        var profileTrainingSession = profileTrainingSessions.findOne({_id:training_session_id});

        if(typeof profileTrainingSession !=='undefined'){
            return profileTrainingSession;
        }
    }

});
