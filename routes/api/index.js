const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const UserRoutes = require('./user-routes');

router.use('/users', UserRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;