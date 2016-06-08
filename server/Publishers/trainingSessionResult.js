/**
 * Created by betha on 5/31/2016.
 */
Meteor.publish('trainingSessionResult', function(training_session_id) {
    if(typeof training_session_id !== 'undefined') {
        var trainingSessions =  profileTrainingSessions.find( { _id:training_session_id});
        return  trainingSessions;
    }
});