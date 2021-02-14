//linking router
const router = require('express').Router();
//extending and formating api calls
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// formating api router for all users
router.route('/').get(getUsers).post(createUser);

// formating for single user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// formating for delete
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

//exporting router
module.exports = router;
