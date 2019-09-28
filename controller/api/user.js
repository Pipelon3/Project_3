// modules
const router = require('express').Router();
const db = require('../../models');

// create a user
router.post('/create', (req, res) => {
  db.User.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(error => console.log(error));
});

// update a user????
router.put('/create', (req, res) => {
  console.log(req.body);
  res.send('hit the create user route');
});

//inserting user info input into user table 
db.User.sync().then(function () {
  db.User.create({
    first_name:     $("#first_name").val("").trim(),
    last_name:      $("#last_name").val("").trim(),
    email_address:  $("#email_address").val("").trim(),
    age:            $("#age").val("").trim(),
    gender:         $("#gender").val("").trim(),         
  }).then(function (data){
  console.log(data.values)
 })
});

module.exports = router;
