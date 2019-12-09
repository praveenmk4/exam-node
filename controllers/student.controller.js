const Student = require('../models/student.model').Student;
const bcrypt = require('bcrypt');
module.exports.addStudent = (req, res) => {

    const student = { username: req.body.username, password: req.body.password, name: req.body.name, email: req.body.email };
  
    Student.findOne({ username: student.email }).exec((err, Data) => {
        if (err) {
            res.send(err);
        } else if (Data !== null) {
            res.send(`User aleready exists with username ${student.username}`);
        } else {
            let member = {
                username: student.username,
                email: student.email,
                personelDetails: {
                    name: student.name
                    
                },
                professionalDeatails: {},
                students: []
            }
            let newstudent = new Student(member);
            newstudent.save((error, result) => {
                if (error) {
                   
                    res.send(error);
                } else {
                  
                    res.send(result);
                }
            });
        }
    });
};
module.exports.getAllStudents = (req,res) =>{
    Student.find({},(err,Data)=>{
        if(err){
            res.send(err);
        }else if(Data == null){
            res.send(`No users added.Please add some users`);
        }else{
            res.send(Data);
        }
    });
};
module.exports.createPassword = (req,res) =>{
    const user =  req.body.email;
    const update = req.body.password;
    const member = new Student();
    Student.findOneAndUpdate({email:user},{ $set: { password: member.generateHash(update) } }, { new: true }).exec((err,Data)=>{
        if(err){
            res.send(err);
        }else{
           res.send(Data);
        }});
   /*      let doc =  await Student.findOne({email:user});
        await Student.updateOne(update,{email:user});
        await doc.save();
        res.send(doc); */

     
}
module.exports.loginStudent = (req,res) =>{
    const user =  req.body.email;
    Student.findOne({email:user}).exec((err,Data)=>{
        if(err){
            res.send(err);
        }else{
            bcrypt.compare(req.body.password,Data.password,(error,result)=>{
                if(error){
                    res.send(error);
                }else{
                    if(result){
                        res.send('valid');
                    }else{
                        res.send('Invalid');
                    }
                }
            });
        }
    });
}