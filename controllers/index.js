const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tripRoutes = require('./tripRoutes');
router.use('/users', userRoutes);
router.use('/trip', tripRoutes);

module.exports = router;