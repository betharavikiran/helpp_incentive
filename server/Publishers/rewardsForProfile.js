/**
 * Created by betha on 6/6/2016.
 */
Meteor.publish('rewardsForProfile', function(profile_id) {
    if(typeof profile_id !== 'undefined') {
        return earnedRewardPoints.find( { profile_id:profile_id,conversion_status:false});
    }
});