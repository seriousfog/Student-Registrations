var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController.js')
const studentController = require('../controllers/studentController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/courses', courseController.viewAll);
router.get('/courses/profile/:id', courseController.viewProfile);
router.get('/courses/edit/:id', courseController.renderEditForm);
router.post('/courses/add/:id', courseController.updateCourse)
router.get('/courses/add', courseController.renderAddForm);
router.post('/courses/add', courseController.addCourse);
router.get('/courses/delete/:id', courseController.deleteCourse);



router.get('/students', studentController.viewAll);
router.get('/students/profile/:id', studentController.viewProfile);
router.get('/students/edit/:id', studentController.renderEditForm);
router.post('/students/edit/:id', studentController.updateStudent);

module.exports = router;
