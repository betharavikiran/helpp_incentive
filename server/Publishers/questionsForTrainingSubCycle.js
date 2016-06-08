/**
 * Created by betha on 5/27/2016.
 */
Meteor.publish('questionsForTrainingSubCycle', function(assigned_training_sub_cycle_id) {
    if(typeof assigned_training_sub_cycle_id !== 'undefined') {
        return  questions.find( { training_sub_cycle_id:assigned_training_sub_cycle_id});
    }
});