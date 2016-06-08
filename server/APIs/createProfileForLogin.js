/**
 * Created by betha on 5/30/2016.
 */
if (Meteor.isServer) {

    // API call for delivery boy location tracking
    Router.map(function(){
        this.route('assignTrainingForProfile', {
            path: '/api/v1/assignTrainingForProfile',
            where: 'server',
            action: function(){
                if ( this.request.body.hasOwnProperty('helpper_id')){

                    var helpper_id = this.request.body.helpper_id;

                    var profile = profiles.find({
                        helpper_id : helpper_id,
                    });

                    if(typeof profile == 'undefined'){

                        profiles.insert({helpper_id:helpper_id})

                       var profile =  profiles.find({helpper_id:helpper_id});

                        var rtrn = '{"status": "Success", "Message": "Profile created Successfully","Profile_ID":'+profile._id+'+}';
                        this.response.end(rtrn);
                    }else{
                        var rtrn = '{"status": "Failed", "Message": "Profile already exist"}';
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