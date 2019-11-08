const Student = require('../models/student.model').Student;

module.exports.addStudent = (req, res) => {

    const student = { username: req.body.username, password: req.body.password, name: req.body.name, email: req.body.email };
  
    Student.findOne({ username: student.username }).exec((err, Data) => {
        if (err) {
            res.send(err);
        } else if (Data !== null) {
            res.send(`User aleready exists with username ${student.username}`);
        } else {
            let member = {
                username: student.username,
                personelDetails: {
                    name: student.name,
                    email: student.email
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