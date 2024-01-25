const {Student} = require('../models')

//view all
module.exports.viewAll = async function(req,res){
    const students = await Student.findAll();
    res.render('student/view_all', {students});
};

//profile
module.exports.viewProfile = async function(req,res) {
    const student = await Student.findByPk(req.params.id);
    res.render('student/profile', {student})
};

//render add

//add

//render edit
module.exports.renderEditForm = async function(req, res){
    const student = await Student.findByPk(req.params.id);
    res.render('student/edit', {student});
};

//edit

//update
module.exports.updateStudent = async function(req, res){
    const student = await Student.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        grade_level: req.body.grade_level,

    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/students/profile/${req.params.id}`);
};

//delete