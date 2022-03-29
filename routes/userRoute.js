const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser); // Create a category
router.route('/login').post(authController.loginUser); // Login a user
router.route('/logout').get(authController.logoutUser); // Logout a user
router.route('/dashboard').get(authController.getDashboardPage); // Dashboard page


module.exports = router;