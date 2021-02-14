// linking express and extending route
const router = require('express').Router();
// linking user routes
const userRoutes= require('./user-routes');
// linking thought routes
const thoughtRoutes = require('./thought-routes');

//extending router 
router.use('/user', userRoutes);
//extending router
router.use('/thougths', thoughtRoutes);

// exportting router
module.exports = router;