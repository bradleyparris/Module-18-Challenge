const router = require('express').Router();

const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/user-controller');

// GET one user by ID, PUT update user, DELETE user
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// GET all and POST user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Add and remove friend
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;