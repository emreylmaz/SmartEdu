const express = require('express');

const app = express();

//Tamplate engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

const port = process.env.PORT || 3000;

//Routes
app.get('/', (req, res) => {
    res.status(200).render('index', {
      page_name: 'index',
    });
});

app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});