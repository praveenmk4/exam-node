const Faculty = require('../models/faculty.model').Faculty;
const async = require("async");
const email = require("../utilities/email");
module.exports.addFaculty = (req, res) => {

    const facultyMember = { username: req.body.username, password: req.body.password, name: req.body.name, email: req.body.email };

    Faculty.findOne({ username: facultyMember.email }).exec((err, Data) => {
        if (err) {
            res.send(err);
        } else if (Data !== null) {
            res.send(`User aleready exists with username ${facultyMember.username}`);
        } else {
            let member = new Faculty({
                username: facultyMember.username,
                personelDetails: {
                    name: facultyMember.name,
                    email: facultyMember.email
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
                    let url = "http://localhost:4201/passwordreset";
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
