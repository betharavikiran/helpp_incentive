/**
 * Created by betha on 5/23/2016.
 */


this.TrainingVideoController = RouteController.extend({
    template: "trainingVideo",

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

var current_video_id;

Template.trainingVideo.onCreated(function() {
    Session.set("isStopped",false);
    var trainingSubCycle = Session.get("training_sub_cycle");

    if(typeof trainingSubCycle!=='undefined' ){
        current_video_id = trainingSubCycle.video_ID;
    }
});

Template.trainingVideo.onRendered(function() {
    onYouTubeIframeAPIReady = function () {
        player = new YT.Player("player", {
            height: "470",
            width: "800",
            videoId : current_video_id,
            playerVars:{
                'autoplay':0,
                'controls':0,
                'rel':0
            },

            // Events like ready, state change,
            events: {
                onReady: function (event) {
                    // Play video when player ready.
                    event.target.playVideo();
                },
                onStateChange: function(event){
                    if(event.data === 0) {
                        Session.set("isStopped",true);
                    }
                }
            }
        });
    };
    YT.load();
});


Template.trainingVideo.helpers({

    isStopped:function(){
        return Session.get("isStopped");;
    }
});

Template.trainingVideo.events({
    'click #btn-assessment':function(){
        Router.go("assessment");
    }
});

