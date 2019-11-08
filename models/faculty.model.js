/* const express = require('express');
const router = express.Router();

const monk = require('monk');
const db =  monk('localhost:27017/examdb');
const facultyData = db.get('faculties'); */


//CRUD  operations
/* const create  = (faculty,cb) =>{
    facultyData.insert(faculty,cb);
};

const getByUserName = (userName,cb) =>{
    facultyData.findOne({userName:userName},{},cb);
};


module.exports = {
    create : create,
    getByUserName :getByUserName
}; */

const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const FacultySchema = new mongoose.Schema({
    username: { type: String, required: true },
    /* password:{type:String,required:true}, */
    userId: { type: ObjectId },
    personelDetails: {
        name: { type: String, required: false },
        email: { type: String, require: false }
    },
    professionalDeatails: {},
    students: [{}]
});
const FacultyModel = mongoose.model('Faculty', FacultySchema);
module.exports = { Faculty: FacultyModel };