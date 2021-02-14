// linking router
const router = require('express').Router();
// extending and formating api routes
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thought-controllers');

// formating api route for all thoughts
router.route('/').get(getThoughts).post(createThought);

// formating api route for single thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


//export router
module.exports = router;
