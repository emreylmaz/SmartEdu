const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(categoryController.createCategory); // Create a category
router.route('/:id').delete(categoryController.deleteCategory); // Delete a category


module.exports = router;