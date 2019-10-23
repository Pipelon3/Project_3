const router = require("express").Router();
const locations = require("./locations");

router.use("/locations",locations);
module.exports = router;