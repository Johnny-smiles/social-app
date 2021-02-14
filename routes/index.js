// linking express and extending router
const router = require('express').Router();
// formating extension
const apiRoutes = require('./api');

// declaring api extension
router.use('/api', apiRoutes);

// error handling
router.use((req, res) => {
    return res.send('Wrong route!')
});

//exporting router
module.exports = router;