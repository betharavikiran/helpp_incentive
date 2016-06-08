/**
 * Created by betha on 5/22/2016.
 */
// Define the test life starting from a video to results
trainingCycles = new Mongo.Collection("trainingCycles");
trainingSubCycles = new Mongo.Collection("trainingSubCycles");
subCycleQuestions = new Mongo.Collection("subCycleQuestions");
questions = new Mongo.Collection("questions");
trueFalseQuestions = new Mongo.Collection("trueFalseQuestions");
multipleChoiceQuestions = new Mongo.Collection("multipleChoiceQuestions");

profiles = new Mongo.Collection("profiles");
profileTrainingSessions = new Mongo.Collection("profileTrainingSessions");

// Survey and Rewards earned
qualityAssuranceQuestions = new Mongo.Collection("qualityAssuranceQuestions");
earnedRewardPoints = new Mongo.Collection("earnedRewardPoints");

// Collections for test instance are pending
Schema = {};
SimpleSchema.debug = true;

Schema.trainingCycles = new SimpleSchema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    level:{
        type:Number,
        allowedValues:[1,2,3,4,5,6],
    },
});

trainingCycles.attachSchema(Schema.trainingCycles, {transform: true});

Schema.trainingSubCycles = new SimpleSchema({
    training_cycle_id:{
        type:String,
    },
    sortOrder:{
        type:Number, // Sort order for Sub cycles
    },
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    video_ID:{
        type:String,
    },
    questions_count:{
        type:Number,
    },
    question_id:{
        type:String
    },
    question_type:{
        type:String,
        allowedValues:["True/False","Multiple Choice"],
    },
});

trainingSubCycles.attachSchema(Schema.trainingSubCycles, {transform: true});

Schema.questionDef = new SimpleSchema({
    question_id:{
      type:String
    },
    question_type:{
        type:String,
        allowedValues:["True/False","Multiple Choice"],
    },
});

Schema.questions = new SimpleSchema({
    training_sub_cycle_id:{
        type:String,
    },
    current_Question: {
        type:Schema.questionDef
    },
    nextQuestion_Wrong: {
        type:Schema.questionDef,
        optional:true
    },
    nextQuestion_Right: {
        type:Schema.questionDef,
        optional:true
    },
});

questions.attachSchema(Schema.questions, {transform: true});


Schema.trueFalseQuestions = new SimpleSchema({
    instructions:{
        type:String,
    },
    question:{
        type:String
    },
    trueOption:{
        type:String
    },
    falseOption:{
        type:String
    },
    answer:{
        type:String
    },
    marks:{
        type:Number,
        allowedValues:[1,2]
    }
});

trueFalseQuestions.attachSchema(Schema.trueFalseQuestions, {transform: true});

Schema.multipleChoiceQuestions = new SimpleSchema({
    instructions:{
        type:String,
    },
    question:{
        type:String
    },
    option1:{
        type:String
    },
    option2:{
        type:String
    },
    option3:{
        type:String
    },
    option4:{
        type:String
    },
    answer:{
        type:String
    },
    marks:{
        type:Number,
        allowedValues:[1,2]
    }
});
multipleChoiceQuestions.attachSchema(Schema.multipleChoiceQuestions, {transform: true});



Schema.questionAttempted = new SimpleSchema({
    instructions:{
        type:String,
    },
    question_Type:{
        type:String,
        allowedValues:["True/False","Multiple Choice"],
    },
    question:{
        type:String
    },
    answer:{
        type:String
    },
    response:{
        type:String
    },
    score:{
        type:Number,
        allowedValues:[0,1,2],
        optional:true

    }
});

Schema.profiles = new SimpleSchema({
    helpper_id:{
        type:String, // link back to user profile in Helpp Platform
    },
    profile_id:{
        type:String, // link back to user profile in Helpp Platform
    }
});

profiles.attachSchema(Schema.profiles, {transform: true});


Schema.profileTrainingSessions = new SimpleSchema({
    profile_id:{
        type:String,
    },
    training_cycle_id:{
        type:String,
    },
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    level:{
        type:Number,
        allowedValues:[1,2,3,4,5,6],
    },
    questionSet:{
        type: [Schema.questionAttempted],
        optional:true
    },
    assigned_Date:{
        type:Date
    },
    attempted_Date:{
        type:Date,
        optional:true
    },
    score:{
        type:Number,
        optional:true
    },
    marks:{
        type:Number,
        optional:true
    },
    status:{
        type:String,
        allowedValues:["Pending","Started","Completed","InProgress"],
        optional:true
    },
    result:{
        type:String,
        allowedValues:["PASS","FAIL"],
        optional:true
    }
});

profileTrainingSessions.attachSchema(Schema.profileTrainingSessions, {transform: true});

Schema.targetDef = new SimpleSchema({
   keywords:{
       type:[String],
       optional:true
   },

   country:{
       type:String,
       optional:true
   },
   state:{
       type:String,
       optional:true
   },
   city:{
       type:String,
       optional:true
   }
});

Schema.qaResponseOption= new SimpleSchema({
    display:{
        type:String,
    },
    valueStr:{
        type:String,
    },
});

Schema.qualityAssuranceQuestions = new SimpleSchema({
   survey_id:{
       type:String,
   },
   instruction:{
       type:String,
       optional:true
   }, 
   survey_question:{
       type:String,
   },
   response_options:{
       type:[Schema.qaResponseOption],
   },
   survey_expiry_date:{
       type:Date
   },
   reward_points:{
       type:Number
   },
   target:{
       type:Schema.targetDef,
       optional:true
   }
});

qualityAssuranceQuestions.attachSchema(Schema.qualityAssuranceQuestions, {transform: true});


Schema.earnedRewardPoints = new SimpleSchema({
    profile_id:{
        type:String,
    },
    survey_id:{
        type:String,
    },
    question_id:{
        type:String,
    },
    survey_question:{
        type:String,
    },
    survey_response:{
      type:String
    },
    survey_expiry_date:{
        type:Date
    },
    reward_points:{
        type:Number
    },
    conversion_status:{
        type:Boolean
    },
    conversion_date:{
        type:Date,
        optional:true
    }
});

earnedRewardPoints.attachSchema(Schema.earnedRewardPoints, {transform: true});

