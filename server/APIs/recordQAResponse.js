/**
 * Created by betha on 6/4/2016.
 */
if (Meteor.isServer) {

    // API call for delivery boy location tracking
    Router.map(function(){
        this.route('recordQAResponse', {
            path: '/api/v1/recordQAResponse',
            where: 'server',
            action: function(){
                console.log("Called");
                if(this.request.query['helpper_id']){
                    var helpper_id = this.request.query['helpper_id'];

                }else{
                    var rtrn = '{"status": "Error" , "Message": "Required parameters missing"}';
                    this.response.end(rtrn);
                }
            }
        });
    });
}


/**
 * Created by betha on 5/30/2016.
 */
if (Meteor.isServer) {

    Meteor.methods({
        recordQAResponse: function (doc) {
            if(doc){
              var  profile_id= doc.qaResponse.profile_id;
              var  question =doc.qaResponse.question;
              var  survey_response= doc.qaResponse.survey_response;

              var   rewardPoint={
                  profile_id:profile_id,
                  survey_id:question.survey_id,
                  question_id:question._id,
                  survey_question:question.survey_question,
                  survey_response:survey_response,
                  survey_expiry_date:new Date(question.survey_expiry_date),
                  reward_points:question.reward_points,
                  conversion_status:false
              }
              var count =  earnedRewardPoints.find({ profile_id:profile_id,
                  survey_id:question.survey_id,
                  question_id:question._id,}).count();

               if(count===0){
                   var record =  earnedRewardPoints.insert(rewardPoint);
                   return '{"status" : "Success", "Message":"Recorded the response Successfully."}';
               }
                else{
                   return '{"status" : "Failed", "Message":"Question already processed."}';
               }


            }
            else{
                return '{"status" : "Fail", "Message":"Failed to complete evaluation."}';
            }
        }
    });

}
