/**
 * Created by betha on 5/22/2016.
 */
Meteor.startup(function() {

    if (trainingCycles.find().count() === 0) {

        console.log("training cycles");
        // create sample employees
        var sample_trainingCycles = [
            { _id : "qitn6CY9ojcyxgjgr", name:"Financial Instruments",description:"Introduction to different types of Financial Instruments.",level:1},
            { _id : "6CkE3S5seCgW8bfW7", name:"Second Cycle",description:"This is the Second test cycle of the seed program, by completing this cycle, you would be on your way to certification process",level:2},
            { _id : "xZzo6fiFrPKofm69Z", name:"Third Cycle",description:"This is the Third test cycle of the seed program, by completing this cycle, you would be on your way to certification process",level:3},
            { _id : "3KqTCwc6fdX6Roi7c",name:"Forth Cycle",description:"This is the Forth test cycle of the seed program, by completing this cycle, you would be on your way to certification process",level:4},
            {  _id : "7yNM4qEs46ZzQnT2R",name:"Fifth Cycle",description:"This is the first test cycle of the seed program, by completing this cycle, you would be on your way to certification process",level:5},
            { _id : "Xx9fAqPt9NwFgZK29",name:"Sixth Cycle",description:"This is the first test cycle of the seed program, by completing this cycle, you would be on your way to certification process",level:6}
        ];

        _.each(sample_trainingCycles, function (trainingCycle) {
            trainingCycles.insert(trainingCycle);
        });
    }

    if (trainingSubCycles.find().count() === 0) {

        console.log("trainingSubCycles");
        // create sample employees
        var sample_trainingSubCycles = [
            {_id:"petn6CY9ojcyxgjgr",training_cycle_id:"qitn6CY9ojcyxgjgr",sortOrder:1,name:"Financial Instruments",description:"Understanding Financial Instruments",video_ID:"nqQPptQPQGk",questions_count:10,
                question_id: "Ad7n6CJ9oixyxgjgr", question_type: "True/False"},
        ];

        _.each(sample_trainingSubCycles, function (trainingSubCycle) {
            trainingSubCycles.insert(trainingSubCycle);
        });
    }

    if(questions.find().count()===0) {
        var sample_questions = [
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Ad7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Bd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Cd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Bd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Dd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Ed7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Cd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Fd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Gd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Dd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Hd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Id7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Ed7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Jd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Kd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Fd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Ld7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Md7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Gd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Nd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Od7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Hd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Pd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Qd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Id7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Rd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Sd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },

            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Jd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Nd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Dd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Kd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Hd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Kd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Ld7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Fd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Hd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Md7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Gd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Rd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Nd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Bd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Cd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Od7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Gd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Ld7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Pd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Cd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Fd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Qd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Id7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Hd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Rd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Kd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Gd7n6CJ9oixyxgjgr", question_type: "True/False"}
            },
            {
                training_sub_cycle_id:"petn6CY9ojcyxgjgr",
                current_Question: {question_id: "Sd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Wrong: {question_id: "Pd7n6CJ9oixyxgjgr", question_type: "True/False"},
                nextQuestion_Right: {question_id: "Ld7n6CJ9oixyxgjgr", question_type: "True/False"}
            }
        ];

        _.each(sample_questions, function (question) {
            questions.insert(question);
        });
    }


    if(trueFalseQuestions.find().count()==0){

        var sample_trueFalseQuestions = [
        {
            _id: "Ad7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Equity is an instrument with Fixed Rate of Return",trueOption:"true",
            falseOption:"false",answer:"false",marks:1},
        {
            _id: "Bd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Debt is an instrument with holding a % of capital",trueOption:"true",
            falseOption:"false",answer:"false",marks:1},
        {
            _id: "Cd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Derivative is a Contract around commodity ?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Dd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Bond is a Govt issued fixed rate instrument?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Ed7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Stock is unit of share in total capital?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Fd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Return on investment increases with Risk",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Gd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Investing in start ups has encouraging fruits in long run",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
                _id: "Hd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Risk of investing in start up is higher over blue chip companies" ,trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Id7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Helpp offers prospects in gig economy",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Jd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Helpp is a startup with great prospects",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Kd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a carpenter participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Ld7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a carpenter participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Md7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a computer professional participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Nd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a new reader participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Od7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a physical trainer participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Pd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a mechanic participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Qd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a painter participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Rd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a artist participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Sd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can house wifes participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Td7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a baby sitter participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Ud7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a Zoo keeper participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Vd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a driver participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Wd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a delivery boy participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Xd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a Professor participate in Helpp gig economy??",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Yd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a Maths teacher participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1},
        {
            _id: "Zd7n6CJ9oixyxgjgr",instructions:"Answer the question by responding on the statement as true or false.",question:"Can a Yoga teacher participate in Helpp gig economy?",trueOption:"true",
            falseOption:"false",answer:"true",marks:1
        }
        ];

        _.each(sample_trueFalseQuestions, function (trueFalseQuestion) {
              trueFalseQuestions.insert(trueFalseQuestion);
        });

    }

    if(profiles.find().count()===0){
        var sample_profiles = [
            {
                profile_id:"etin6CH9ojcyxgjgR",
                helpper_id:"1"
            }
        ];

        _.each(sample_profiles, function (profile) {
            profiles.insert(profile);
        });
    }

    if(profileTrainingSessions.find().count()===0){
        var sample_profileTrainingSessions = [
            {
                profile_id:"etin6CH9ojcyxgjgR",
                training_cycle_id:"qitn6CY9ojcyxgjgr",
                name:"Financial Instruments",
                description:"Introduction to different types of Financial Instruments.",
                level:1,
                assigned_Date:new Date(),
                status:"Pending"
            }
        ];

        _.each(sample_profileTrainingSessions, function (profileTrainingSession) {
            profileTrainingSessions.insert(profileTrainingSession);
        });
    }
    
    if(qualityAssuranceQuestions.find().count()===0){

        var sample_qualityAssuranceQuestions = [
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"Was it easy for you to handle customers using Helpp?",
                response_options:[{display:"Yes",valueStr:"Yes"},{display:"No",valueStr:"No"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:50,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"Were you able to find sufficient training through our website ?",
                response_options:[{display:"Yes",valueStr:"Yes"},{display:"No",valueStr:"No"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:50,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"Are you able to manage your jobs effectively using Helpp?",
                response_options:[{display:"Yes",valueStr:"Yes"},{display:"No",valueStr:"No"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:50,
            },
            {
                survey_id:"psio1124sdsd4s",
                instruction:"1 being easy and 7 being hard.",
                survey_question:"How easy was it to make a booking ?",
                response_options:[{display:"Yes",valueStr:"Yes"},{display:"No",valueStr:"No"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:50,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"Do you think helpp is enabling to expand your business?",
                response_options:[{display:"Yes",valueStr:"Yes"},{display:"No",valueStr:"No"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:25,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"What are your primary considerations to return to Helpp on Daily basis?",
                response_options:[{display:"Customers",valueStr:"Customers"},{display:"Job Management",valueStr:"Job Management"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:150,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"Was social media integration helpful for promoting your business ?",
                response_options:[{display:"Yes",valueStr:"Yes"},{display:"No",valueStr:"No"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:10,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"Is there any thing you dont like about helpp?",
                response_options:[{display:"Yes",valueStr:"Yes"},{display:"No",valueStr:"No"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:60,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"What do you think about the User inferface for Helpp? ",
                response_options:[{display:"Great",valueStr:"Great"},{display:"Good",valueStr:"Good"},{display:"OK",valueStr:"OK"},{display:"Poor",valueStr:"Poor"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:70,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"If you were unhappy with us what can we do to get you to come back?",
                response_options:[{display:"Yes",valueStr:"Yes"},{display:"No",valueStr:"No"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:60,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"What is the primary benefit that you have received from our company?",
                response_options:[{display:"Business Expansion",valueStr:"Business Expansion"},{display:"Job Management",valueStr:"Job Management"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:80,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"What features could you live without?",
                response_options:[{display:"Social Media",valueStr:"Social Media"},{display:"Email Promotion",valueStr:"Email Promotion"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:50,
            },
            {
                survey_id:"psio1124sdsd4s",
                survey_question:"Compared to our competitors, is our product quality better, worse, or about the same?",
                response_options:[{display:"Better",valueStr:"Better"},{display:"Worse",valueStr:"Worse"}],
                survey_expiry_date:new Date(2016,6,15),
                reward_points:80,
            },
        ];

        _.each(sample_qualityAssuranceQuestions, function (qualityAssuranceQuestion) {
            qualityAssuranceQuestions.insert(qualityAssuranceQuestion);
        });
    }
    
});