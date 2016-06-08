/**
 * Created by betha on 5/31/2016.
 */
Meteor.publish('completedTrainingForProfile', function(profile_id) {
    if(typeof profile_id !== 'undefined') {
        return  profileTrainingSessions.find( { profile_id:profile_id,status:"Completed"});
    }
});