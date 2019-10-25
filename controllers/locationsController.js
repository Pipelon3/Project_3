const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      console.log('hit findall')
      db.Locations
        // .find(req.query)
        .find()
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    }
}