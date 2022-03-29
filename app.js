const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');


const app = express();

// Connect to MongoDB
 mongoose.connect('mongodb://localhost/smartedu-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected')
}).catch(err => console.log(err));

//Template engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 3000;

//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});