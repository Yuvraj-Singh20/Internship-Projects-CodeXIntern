const Todo = require('../models/todoModel');

exports.createTodo = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;

  try {
    const todo = await Todo.create({
      user: req.user._id,
      title,
      description,
      dueDate,
      priority,
    });

    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { title, description, isCompleted, dueDate, priority } = req.body;

  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user._id });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.isCompleted = isCompleted ?? todo.isCompleted;
    todo.dueDate = dueDate || todo.dueDate;
    todo.priority = priority || todo.priority;

    const updated = await todo.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
