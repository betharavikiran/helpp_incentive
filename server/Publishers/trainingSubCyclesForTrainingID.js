/**
 * Created by betha on 5/27/2016.
 */
Meteor.publish('trainingSubCyclesForTrainingID', function(assigned_training_id) {
    if(typeof assigned_training_id !== 'undefined') {
        return  trainingSubCycles.find({ training_cycle_id:assigned_training_id},{ sort: { sortOrder: 1 }});
    }
});