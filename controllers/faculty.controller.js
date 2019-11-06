const Faculty = require('../models/faculty.model').Faculty;
const async = require("async");
module.exports.addFaculty = (req,res) =>{
 /*    wrap(addNewFaculty(req)) */
 const facultyMember =  {
    username : req.body.username,
    password : req.body.password,
    name:req.body.name,
    email:req.body.email
};
    console.log('Im in the add faculty service');
    Faculty.findOne({username:facultyMember.username}).exec((err,Data)=>{

        if(err){
            res.send(err);
        }else if(Data !== null){
            res.send(`User aleready exists with username ${facultyMember.username}`);
        }else{
            let member = {
                username :facultyMember.username,
                personelDetails :{
                    name: facultyMember.name,
                    email:facultyMember.email
                },
                professionalDeatails:{},
                students:[]
            }
            let newFacultyMember =  new Faculty(member);
            newFacultyMember.save((error,result)=>{
                if(error){
                    console.log('cominginside the save');
                    res.send (error);
                }else{
                    console.log('cominginside the save');
                    res.send(result);
                }
            });
        }
    });
};

