// modules
const router = require('express').Router();
const db = require('../../models');

// Find all locations by type
router.get('/all/:type', (req, res) => {
    console.log(req.params);
  db.Location.findAll({where:{loc_type:req.params.loc_type}})
    .then(location => {
      res.json(location);
    })
    .catch(error => console.log(error));
});

// Find a location by location id
router.get('/single/:id', (req, res) => {
    console.log(req.params);
  db.Location.findAll({where:{id:req.params.id}})
    .then(location => {
      res.json(location);
    })
    .catch(error => console.log(error));
});

db.Location.create({
  zip_code: 84107,
  address: '6191 State St',
  loc_type: 'Mall',
  loc_name: 'Fashion Place',
  bldng_name: 'null',
}).then(function (err) {
  if (err) {
    console.log('Error in Inserting Record');
  } else {
    console.log('Mall successfully inserted');
  }
});

db.Location.create({
  zip_code: 84112,
  address: '201 Presidents Cir',
  loc_type: 'School',
  loc_name: 'University of Utah',
  bldng_name: 'Salt Lake Campus',
}).then(function (err) {
  if (err) {
    console.log('Error in Inserting Record');
  } else {
    console.log('School successfully inserted');
  }
});

module.exports = router;