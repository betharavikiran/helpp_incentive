/**
 * Created by betha on 5/30/2016.
 */
if (Meteor.isServer) {

    Meteor.methods({
        evaluateAssessment: function (doc) {
            if(doc){

                var training_session_id = doc.training_session_id;
                var profileTrainingSession = profileTrainingSessions.findOne({_id: training_session_id});

                if(profileTrainingSession) {
                    // Passing % is 60%
                    var result = "FAIL";
                    var status = "Completed";
                    var scoredPercentage = Math.round((profileTrainingSession.score / profileTrainingSession.marks) * 100);

                    if (scoredPercentage >= 60) {
                        result = "PASS";
                    }

                    var record =0;

                    try{
                        record = profileTrainingSessions.update(
                            {_id: training_session_id},
                            {$set: {status: status, result: result}}
                        );
                    }
                    catch(exception){

                    }

                    if(record==1){
                        return '{"status" : "Success", "Message":"Evaluation completed successfully."}';
                    }
                    else{
                        return '{"status" : "Fail", "Message":"Failed to update the record"}';
                    }
                }
                else{
                    return '{"status" : "Fail", "Message":"Profile training Session not found."}';
                }
            }
            else{
                return '{"status" : "Fail", "Message":"Failed to complete evaluation."}';
            }
        }
    });

}
