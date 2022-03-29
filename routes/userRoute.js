const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser); // Create a category
router.route('/login').post(authController.loginUser); // Login a user


module.exports = router;