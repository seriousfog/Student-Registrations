var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/courses', courseController.viewAll);
router.get('/courses/profile/:id', courseController.viewProfile);
router.get('/courses/edit/:id', courseController.renderEditForm);
router.get('/courses/add', courseController.renderAddForm);
router.post('/courses/add', courseController.addCourse);

module.exports = router;
