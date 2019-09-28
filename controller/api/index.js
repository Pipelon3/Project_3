// modules
const router = require('express').Router();
const userRoutes = require('./user');
const reviewRoutes = require('./review');
const authRoutes = require('./auth');
const locationRoutes = require('./location');
// declare our routes
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/location', locationRoutes);

module.exports = router;