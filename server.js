require('dotenv').config();

const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db/pg');

// establish folder routes
const beverageRoutes = require( path.join(__dirname, '/routes/beverages'));

const app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// set views and public path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use( express.static( path.join( __dirname, 'public' )));

// home page
app.get('/', (req, res) => {
  res.render('index');
});

// routes
app.use( '/api/beverages', beverageRoutes);

app.listen(process.env.PORT, function() {
  console.log(`Listening on port ${process.env.PORT}`);
});
