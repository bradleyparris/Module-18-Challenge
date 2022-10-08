const router = require('express').Router();
const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// Create Thought
router
  .route('/:userId')
  .post(addThought);

//Get all Thoughts
  router
  .route('/')
  .get(getAllThoughts);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought);



// /api/thought/<userId>/<thoughtId>
 router
 .route('/:userId/:thoughtId')
 .put(addReaction)
 .delete(removeThought);

 router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;