const Questionnaire = require('../models/questionnaire.model').Questionnaire;
const Faculty = require('../models/faculty.model').Faculty;
const mongoose = require('mongoose');
module.exports.addQuestions = (req, res) => {
    console.log('in creaedasfadsfasdfasdfasdfasddf');
    const Question = {
        "technology": req.body.technology,
        "questions": req.body.questions
    };
    let question = { technology: Question.technology, questions: Question.questions };

    var questionObj = {};
    console.log(Question.questions);

    Questionnaire.findOne({ technology: Question.technology }).exec((err, Data) => {
        if (err) {
            res.send(err);
        } else if (Data !== null) {
            for (var i = 0; i < Question.questions.length; i++) {
                questionObj.question = Question.questions[i].question;
                questionObj.questionType = Question.questions[i].questionType;
                questionObj.options = Question.questions[i].options;
            }
            Questionnaire.findOneAndUpdate({ technology: Question.technology }, { $push: { questions: questionObj } }).exec((err, record) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(record);
                }
            });
        } else {

            let newQuestion = new Questionnaire(question);
            newQuestion.save((error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        }
    });
};
module.exports.getRandomQuestion = (req, res) => {
    const number = Number(req.params.number);
    Questionnaire.aggregate([{$match: { technology: req.params.technology}} ,{ "$unwind": "$questions" }  , { "$sample": { "size":number}}  ]).exec((err, Data) => {
        if (err) { res.send(err) } else {
            res.send(Data);
        }
    });
};
module.exports.saveTest = (req,res) =>{
    const test = {
        userId :req.body.email,
        questions:req.body.question
    };
 Faculty.findOneAndUpdate({email:req.body.email},{ $set: { tests: test }},{new: true, upsert: true} ).exec((err,Data) =>{
        if(err){
            res.send(err);
        }else{
            res.send(Data);
        }
    });
};
