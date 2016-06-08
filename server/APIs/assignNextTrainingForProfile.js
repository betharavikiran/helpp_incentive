/**
 * Created by betha on 5/30/2016.
 */
if (Meteor.isServer) {

    // API call for delivery boy location tracking
    Router.map(function(){
        this.route('assignNextTrainingForProfile', {
            path: '/api/v1/assignNextTrainingForProfile',
            where: 'server',
            action: function(){
                if ( this.request.body.hasOwnProperty('profile_id')){

                    var profile_id = this.request.body.profile_id;

                    var profileTrainingSessions =profileTrainingSessions.find({profile_id:profile_id},{sort:{attempted_Date:-1},limit:1});

                    // This is the last training Session
                    if(typeof profileTrainingSessions =='undefined'){

                       var trainingCycle = trainingCycles.find({_id:profileTrainingSessions.trainingCycles_id});
                       var nextTrainingCycle = trainingCycle.find({level:trainingCycle.level+1});

                       var  nextProfileTrainingSession = {
                           profile_id:profile_id,
                           trainingCycles_id:nextTrainingCycle._id,
                           name:nextTrainingCycle.name,
                           description:nextTrainingCycle.description,
                           level:nextTrainingCycle.level,
                           assigned_Date: new Date(),
                           status:"Pending"
                       };

                        profileTrainingSessions.insert(nextProfileTrainingSession);

                        var rtrn = '{"status": "Success", "Message": "Training Session Assigned"}';
                        this.response.end(rtrn);
                    }else{

                        var nextTrainingCycle = trainingCycle.find({level:1});

                        var  nextProfileTrainingSession = {
                            profile_id:profile_id,
                            trainingCycles_id:nextTrainingCycle._id,
                            assigned_Date: new Date(),
                            status:"Pending"
                        };

                        profileTrainingSessions.insert(nextProfileTrainingSession);
                        var rtrn = '{"status": "Success", "Message": "Training Session Assigned"}';
                        this.response.end(rtrn);
                    }
                }else{
                    var rtrn = '{"status": "Error" , "Message": "Required parameters missing"}';
                    this.response.end(rtrn);
                }
            }
        });
    });
}	