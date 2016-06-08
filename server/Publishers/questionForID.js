/**
 * Created by betha on 5/27/2016.
 */
Meteor.publish('questionForID', function(current_question_id) {
   var questionList = questions.find({'current_Question.question_id':current_question_id});
   return  questionList;
});