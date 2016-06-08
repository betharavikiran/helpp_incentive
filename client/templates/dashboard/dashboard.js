/**
 * Created by betha on 5/18/2016.
 */
this.DashboardController = RouteController.extend({
    template: "dashboard",

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


Template.dashboard.onCreated(function() {
    var self = this;
    Session.clear();
    Session.setPersistent("profile_id","etin6CH9ojcyxgjgR");
});