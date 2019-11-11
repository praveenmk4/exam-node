const facultyController = require('./faculty.controller');
const studentController = require('./student.controller');

module.exports.register = (req, res) => {
    switch (req.role) {
        case 'admin':
            console.log('yet to write admin');
            break;
        case 'faculty':
            facultyController.addFaculty(req, res);
            break;
        case 'student':
            studentController.addStudent(req, res);
            break
        default:
            break;
    }
};


