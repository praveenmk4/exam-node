const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const studentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    userId: { type: ObjectId },
    personelDetails: {
        name: { type: String, required: false },
        email: { type: String, require: false }
    },
    Courses: {
        completed: { type: Number, required: false },
        inProgress: { type: Number, required: false }
    },
    Achievements: { type: Number, required: false }
});
const StudentModel = mongoose.model('Student', studentSchema);
module.exports = { Student: StudentModel };