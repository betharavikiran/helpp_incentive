/**
 * Created by betha on 5/26/2016.
 */
Meteor.publish('assignedTrainingForProfile', function(profile_id) {
    if(typeof profile_id !== 'undefined') {
        var assignedTrainingSessions =  profileTrainingSessions.find( { profile_id:profile_id,status:"Pending"});

        return assignedTrainingSessions;
    }
});