/**
 * Created by betha on 5/22/2016.
 */
this.EarnedPointsController = RouteController.extend({
    template: "earnedPoints",

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
Template.earnedPoints.onCreated(function() {
    var self = this;

    this.autorun(function() {
        var profile_id=Session.get("profile_id");
        if(typeof profile_id !=='undefined'){
            var subRewards = self.subscribe('rewardsForProfile',profile_id);
            if(!subRewards.ready())
                return false;
        }
    });
});

Template.earnedPoints.onRendered(function() {

    
});



Template.earnedPoints.helpers({
    totalRewardPoints:function () {
        var totalRewards =0;
        var earnedRewards = earnedRewardPoints.find({});
        earnedRewards.forEach(function(rewardPoint){
            totalRewards = totalRewards + rewardPoint.reward_points
        });
        return totalRewards;
    },
    today:function(){
        return new Date();
    }
});
