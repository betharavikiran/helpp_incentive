/**
 * Created by betha on 5/27/2016.
 */
this.MultipleChoiceController = RouteController.extend({
    template: "multipleChoice",

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