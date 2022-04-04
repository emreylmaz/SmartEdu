const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const { body } = require('express-validator');
const User = require('../models/User');

const router = express.Router();

router.route('/signup').post(
  [
    body('name').not().isEmpty().withMessage('Name is required'),


    body('email').isEmail().withMessage('Valid Email is required')
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject('Email already exists');
          }
        });
      }),


    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  authController.createUser); // Create a category
router.route('/login').post(authController.loginUser); // Login a user
router.route('/logout').get(authController.logoutUser); // Logout a user
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage); // Dashboard page


module.exports = router;