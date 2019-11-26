const Questionnaire = require('../models/questionnaire.model').Questionnaire;
module.exports.addQuestions = (req, res) => {
    console.log('in creaedasfadsfasdfasdfasdfasddf');
    const Question = {
        "technology":req.body.technology,
        "questions":req.body.questions
    };
    let question = { technology: Question.technology,questions:Question.questions};

    var questionObj = {};
    console.log(Question.questions);
 
    Questionnaire.findOne({ technology: Question.technology }).exec((err, Data) => {
        if (err) {
            res.send(err);
        } else if (Data !== null) {
            for (var i=0;i< Question.questions.length;i++){
                questionObj.question = Question.questions[i].question;
                questionObj.questionType = Question.questions[i].questionType;
                questionObj.options = Question.questions[i].options;
            }
          Questionnaire.findOneAndUpdate({technology: Question.technology}, { $push: { questions: questionObj } }).exec((err,record) =>{
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