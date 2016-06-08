/**
 * Created by betha on 6/4/2016.
 */
/**
 * Created by betha on 5/22/2016.
 */
this.SampleSurveyController = RouteController.extend({
    template: "sampleSurvey",

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

var helpper_id=1;
var qa_question=null;

Template.sampleSurvey.onCreated(function() {
    this.autorun(function() {

    });
});


Template.sampleSurvey.onRendered(function() {
    this.autorun(function() {
        qa_question = Session.get("qa_question");
    });
});


Template.sampleSurvey.helpers({
   question:function(){
       return Session.get("qa_question").survey_question;
   },
   response_options:function(){
       var responses = Session.get("qa_question").response_options;
       return  responses ;
   }
    
});




Template.sampleSurvey.events({
    "click #btn-getQuestion":function(){
        Meteor.call('getNextQAQuestion', {profile_id: Session.get("profile_id")}, function (err, response) {
            if (err) {
            } else
            {
               var object = JSON.parse(response);
               if(object.status ==="Success")
               {
                  Session.set("qa_question",object.question);
               }


            }
        });
    },
    "click .responseSelected":function(event,template){
        var element = template.find('input:radio[name=radioOption]:checked');

        var qaResponse ={
            profile_id:Session.get("profile_id"),
            question:Session.get("qa_question"),
            survey_response:$(element).val()
        };

        Meteor.call('recordQAResponse', {qaResponse: qaResponse}, function (err, response) {
            if (err) {
                alert("error");
            } else
            {
                Meteor.call('getNextQAQuestion', {helpper_id: helpper_id}, function (err, response) {
                    if (err) {
                    } else
                    {
                        var object = JSON.parse(response);
                        if(object.status ==="Success")
                        {
                            // alert(object.question._id);
                            Session.set("qa_question",null);
                        }
                    }
                });
            }
        });
    }

});





