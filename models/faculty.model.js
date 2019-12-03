const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const bcrypt =  require('bcrypt')    ;
const FacultySchema = new mongoose.Schema({
    email: { type: String, require: false },
    username: { type: String, required: true },
    userId: { type: ObjectId },
    password: { type: String },
    createdDateTime: { type: Date, default: Date.now },
    personelDetails: {
        name: { type: String, required: false },
        mobile:{type:Number,required:false}
    },
    professionalDeatails: {},
    students: [{}],
    tests :[]
});
FacultySchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
const FacultyModel = mongoose.model('Faculty', FacultySchema);
module.exports = { Faculty: FacultyModel };