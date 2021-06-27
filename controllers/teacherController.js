const Teacher = require('../models/teacher');
const Thesis = require('../models/thesis');
const mongoose = require('mongoose');

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

exports.getThesisNotifications = (req, res, next) => {
  Thesis.find({'teachers.requestedSupervisors.teacherId': req.user._id})
  .then(noti => {
    console.log('noti = ', noti);
    res.render('teacher/show-thesis-notifications', {
      path: '/teacher/showThesisNotifications',
      pageTitle: 'Thesis requests',
      notifications: noti
    });
  })
}

exports.getThesisPage = (req, res, next) => {
  res.render('teacher/show-thesis', {
    path: '/teacher/showThesis',
    pageTitle: 'Thesis Details'
  });
}