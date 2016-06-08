/**
 * Created by betha on 5/27/2016.
 */
Meteor.publish('trainingCycleForID', function(assigned_training_id) {
    if(typeof assigned_training_id !== 'undefined') {
        var trainingSessions =  profileTrainingSessions.find( { _id:assigned_training_id});
        return  trainingSessions;
    }
});