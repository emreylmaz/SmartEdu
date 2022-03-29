const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse); // Create a course
router.route('/').get(courseController.getAllCourse); // Get all courses
router.route('/:slug').get(courseController.getCourse); // Get a course by id


module.exports = router;