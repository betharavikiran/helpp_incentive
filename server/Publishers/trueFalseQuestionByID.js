/**
 * Created by betha on 5/27/2016.
 */
Meteor.publish('trueFalseQuestionByID', function(questionID) {
    if(typeof questionID !== 'undefined') {
        return trueFalseQuestions.find({_id:questionID});
    }
});