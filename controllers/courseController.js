const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    const course = await Course.create(req.body)

    try {
      res.status(201).json({
        status: 'success',
        course
      })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}