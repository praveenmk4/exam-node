const Faculty = require('../models/faculty.model').Faculty;
const async = require("async");
const bcrypt =  require('bcrypt')    ;
const email = require("../utilities/email");
module.exports.addFaculty = (req, res) => {

    const facultyMember = { username: req.body.username, password: req.body.password, name: req.body.name, email: req.body.email ,mobile:req.body.mobile};

    Faculty.findOne({ username: facultyMember.email }).exec((err, Data) => {
        if (err) {
            res.send(err);
        } else if (Data !== null) {
            res.send(`User aleready exists with username ${facultyMember.username}`);
        } else {
            let member = new Faculty({
                username: facultyMember.username,
                email: facultyMember.email,
                personelDetails: {
                    name: facultyMember.name,
                    mobile:facultyMember.mobile 
                },
                professionalDeatails: {},
                students: []
            });
            member.password =  member.generateHash(req.body.password);
          //  let newFacultyMember = new Faculty(member);
          member.save((error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                    let url = "http://localhost:4201/passwordreset";//change the ip address
                    email.sendMail(`Thanks for registering..!!!","Please Login to the web site by clicking on the  following URL ${url} `,"","",facultyMember.email,"Confirmation Mail");
                }
            });
        }
    });
};
module.exports.getAllFacuties = (req,res) => {
    Faculty.find({},(err,Data)=>{
        if(err){
            res.send(err);
        }else if(Data == null){
            res.send(`No faculty members are available`);
        }else{
            res.send(Data);
        }
    });
};
module.exports.getFacultyByEmail = (req,res)=>{
    const User = req.params.email;
    Faculty.findOne({email:User},(err,Data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(Data);
        }
    });
};
module.exports.loginFacutly = (req,res) =>{
    const User = req.body.email;
    Faculty.findOne({email:User},(err,Data)=>{
        if(err){
            res.send(err);
        }else{
          bcrypt.compare(req.body.password,Data.password,(error,result) =>{
              if(err){
                  res.send(error);
              }else{
                  if(result){
                      res.send('Valid')
                  }else{
                      res.send('Invalid');
                  }
              }
          })
        }
    });
};