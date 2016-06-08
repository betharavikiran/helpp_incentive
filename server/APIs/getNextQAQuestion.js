/**
 * Created by betha on 6/4/2016.
 */
if (Meteor.isServer) {

    // API call for delivery boy location tracking
    Router.map(function(){
        this.route('getNextQAQuestion', {
            path: '/api/v1/getNextQAQuestion',
            where: 'server',
            action: function(){
                console.log("Called");
                if(this.request.query['helpper_id']){
                    var helpper_id = this.request.query['helpper_id'];

                    var profile = profiles.find({
                        helpper_id : helpper_id,
                    });

                    var question_ids=[];

                    var startDate = new Date();
                    var endDate = new Date(startDate);
                    endDate.setDate(endDate.getDate() + 30);

                    var  earnedRewards = earnedRewardPoints.find({'survey_record.survey_expiry_date':{ $gte :startDate, $lte: endDate }});

                    console.log(earnedRewards.count());

                    earnedRewards.forEach(function(earnedReward){
                        question_ids.push(earnedReward.question_id);
                    });

                    console.log(question_ids);

                    var  question = qualityAssuranceQuestions.findOne({survey_expiry_date:{ $gte :startDate },_id:{$nin:question_ids}});

                   // console.log(question);
                    if(question){
                        var questionStr = JSON.stringify(question);
                        var rtrn = '{"status": "Success" ,'+questionStr+'}';
                        this.response.end(rtrn);
                    }
                    else{
                        var rtrn = '{"status": "Fail","Message": "No question"}';
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


/**
 * Created by betha on 5/30/2016.
 */
if (Meteor.isServer) {

    Meteor.methods({
        getNextQAQuestion: function (doc) {
            if(doc){

                var profile_id = doc.profile_id;

                var question_ids=[];

                var startDate = new Date();
                var endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + 30);

                var  earnedRewards = earnedRewardPoints.find({profile_id:profile_id,survey_expiry_date:{ $gte :startDate}});

                earnedRewards.forEach(function(earnedReward){
                    question_ids.push(earnedReward.question_id);
                });

                console.log(earnedRewards.count());
                var  question = qualityAssuranceQuestions.findOne({survey_expiry_date:{ $gte :startDate},_id:{$nin:question_ids}});

                if(question){
                    var questionStr = JSON.stringify(question);
                    var rtrn = '{"status": "Success" ,"question":'+questionStr+'}';
                    return rtrn
                }
                else{
                    var rtrn = '{"status": "Fail","Message": "No question"}';
                    return rtrn
                }
            }
            else{
                return '{"status" : "Fail", "Message":"Failed to complete evaluation."}';
            }
        }
    });

}
