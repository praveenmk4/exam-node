const mongoose = require('mongoose');
//const bcrypt =  require('bcrypt')    ;
const QuestionnaireSchema = new mongoose.Schema({
  technology:{type: String, required: true },  
  questions:[
      {
       question :{type:String},
       questionType:{type:String},
       options:[]
      }
  ]
});
const QuestioSchema = mongoose.model('Questionnaire', QuestionnaireSchema);
module.exports = { Questionnaire: QuestioSchema };