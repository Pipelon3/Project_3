// modules
const router = require('express').Router();
const db = require('../../models');

// create a review
router.post('/create', (req, res) => {
  db.Review.create(req.body)
  .then(review => {
    res.json(review);
  })
  .catch(error => console.log(error));
});

db.Review.sync({force: true}).then(function () {
  db.Review.create({
    user_loc: $('#inputLocation').val().trim(),
    clean_status: $('#Cleanliness').val().trim(),
    wait_time: $('#Wait').val().trim(),
    star_rvw: $('#star').val().trim(),
    user_notes: 'null',
  }).then(function (data) {
    console.log(data.values)
  })
}); 

module.exports = router;