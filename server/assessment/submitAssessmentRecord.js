/**
 * Created by betha on 5/30/2016.
 */
if (Meteor.isServer) {

    Meteor.methods({
        submitAssessmentRecord: function (doc) {
            if(doc){

                var training_session_id=doc.attempt.training_session_id;
                var profile_id = doc.attempt.profile_id;
                var training_cycle_id = doc.attempt.training_cycle_id;
                var instructions = doc.attempt.instructions;
                var question_Type = doc.attempt.question_Type;
                var question = doc.attempt.question;
                var answer = doc.attempt.answer;
                var marks  =doc.attempt.marks;
                var response = doc.attempt.response;
                var score = doc.attempt.score;

                var rec =profileTrainingSessions.update(
                    { _id:training_session_id},
                    { $inc: { score: score, marks: marks },$push: {questionSet: {instructions: instructions, question_Type: question_Type,question:question,answer:answer,response:response,score:score}} }
                );

                return '{"status" : "Success", "Message":"Question attempted is recorded"}';
            }else{
                return '{"status" : "Fail", "Message":"Updating the record in database failed."}';
            }
        }

    });

}
