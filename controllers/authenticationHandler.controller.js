const facultyController = require('./faculty.controller');
const studentController = require('./student.controller');

module.exports.register = (req, res) => {
/*     switch (req.role) {
        case 'admin':
            console.log('yet to write admin');
            break;
        case 'faculty':
          res.send (facultyController.addFaculty(req, res)) ;
            break;
        case 'student':
            studentController.addStudent(req, res);
            break
        default:
            break;
    } */
    res.send (facultyController.addFaculty(req, res)) ;
};
module.exports.login = (req,res) =>{
    switch (req.role) {
        case 'admin':
            console.log('yet to write admin');
            break;
        case 'faculty':
            facultyController.loginFacutly(req, res);
            break;
        case 'student':
            studentController.loginStudent(req, res);
            break
        default:
            break;
    }
}


