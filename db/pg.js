'use strict';

require('dotenv').config();

const pgp = require('pg-promise')({
    // Initialization Options
});

// connection path
const cn = process.env.DATABASE_URL;

const db = pgp(cn);

// show all beverages in the db
function showBeverages(req, res, next) {
  db.any(`SELECT *
  FROM beverages;`)
  .then(function(data) {
    res.rows = data;
    next();
  })
  .catch(function(error){
    console.error(error);
  });
};

// add a beverage to the db
function addBeverage(req, res, next) {
  db.one(`INSERT INTO beverages (bev_name, price)
    VALUES ($1, $2) RETURNING *`,
    [req.body.bev_name, req.body.price])
    .then(function(data) {
      console.log('beverage added');
      res.rows = data;
      next();
    })
    .catch(function (error) {
      console.error(error);
    });
};

// delete a beverage from the db, show the result
function deleteBeverage(req, res, next) {
  db.none(`DELETE FROM beverages
    WHERE bev_id=$1`,
    [req.params.id])
    .then(function(data) {
      res.rows = data;
      next();
    })
    .catch(function (error) {
      console.error(error);
    });
};

// update a beverage in the db
function editBeverage(req, res, next) {
  db.none(`UPDATE beverages
    SET bev_name=$1, price=$2
    WHERE bev_id=$3;`,
    [req.body.bev_name, req.body.price, req.params.id])
    .then(function(data) {
      res.rows = data;
      next();
    })
    .catch(function (error) {
      console.error(error);
    });
};


// export it
module.exports.showBeverages = showBeverages;
module.exports.addBeverage = addBeverage;
module.exports.deleteBeverage = deleteBeverage;
module.exports.editBeverage = editBeverage;
