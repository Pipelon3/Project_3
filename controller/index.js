// modules
const router = require('express').Router();
const apiRoutes = require('./api');
const staticRoutes = require('./static');
// declare our routes
// API Routes
router.use('/api', apiRoutes);
router.use('/', staticRoutes);

module.exports = router;

