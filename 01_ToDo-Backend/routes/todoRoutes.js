const express = require('express');
const router = express.Router();
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');
const { protect } = require('../middlewares/authMiddleware');

router.route('/')
  .post(protect, createTodo)
  .get(protect, getTodos);

router.route('/:id')
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

module.exports = router;
