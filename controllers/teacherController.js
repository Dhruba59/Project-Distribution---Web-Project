const Teacher = require('../models/teacher');

exports.getProfilePage = (req, res, next) => {
  const teacherName = res.locals.currentUserName;
  Teacher.findOne({name: teacherName})
  .then((tea) => {
    res.render('teacher/teacher-detail', {
      path: '/teacher/teacherProfile',
      pageTitle: 'Teacher Profile',
      tea: tea
    });
  })
};

exports.getProfileByEmail = (req, res, next) => {
  const teacherEmail = req.params.teacher_email;
  Teacher.findOne({email: teacherEmail})
  .then(tea =>{
    res.render('teacher/teacher-detail', {
      path: '/teacher/teacherProfile',
      pageTitle: 'Teacher Profile',
      tea: tea
    });
  })

};
  