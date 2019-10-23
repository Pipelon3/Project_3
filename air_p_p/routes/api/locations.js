const router = require("express").Router();
const locationsController = require("../../controllers/locationsController");

// final path => /api/locations/
router.route('/')
    .get(locationsController.findAll)

module.exports = router