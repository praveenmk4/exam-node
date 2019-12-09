const mongoose = require('mongoose');
const bcrypt =  require('bcrypt');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const studentSchema = new mongoose.Schema({
    username: { type: String, required: false },
    email: { type: String, require: true },
    password: { type: String },
    userId: { type: ObjectId },
    personelDetails: {
        name: { type: String, required: false }     
    },
    Courses: {
        completed: { type: Number, required: false },
        inProgress: { type: Number, required: false }
    },
    Achievements: { type: Number, required: false }
});
studentSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
const StudentModel = mongoose.model('Student', studentSchema);
module.exports = { Student: StudentModel };