const express = require('express');
const pageRoute = require('./routes/pageRoute');

const app = express();

//Template engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

const port = process.env.PORT || 3000;

//Routes
app.use('/', pageRoute);



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});