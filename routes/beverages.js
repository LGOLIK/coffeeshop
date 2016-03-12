'use strict';

const express     = require('express');
const beverages   = express.Router();
var db            = require('../db/pg');


// edit a beverage
beverages.put('/:id', db.editBeverage, (req, res) => {
  res.json(res.rows);
});

// delete a beverage
beverages.delete('/:id', db.deleteBeverage, (req, res) => {
  res.json(res.rows);
});

// get all beverages
beverages.get('/', db.showBeverages, (req, res) => {
  res.json(res.rows);
});

// add a new beverage
beverages.post('/', db.addBeverage, (req, res) => {
  res.json(res.rows);
});


module.exports = beverages;
