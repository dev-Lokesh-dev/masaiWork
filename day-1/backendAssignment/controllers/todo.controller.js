const Todo = require("../models/todo.model");

exports.createTodo = async (req, res) => {
  const todo = new Todo({ ...req.body, userId: req.user.userId });
  await todo.save();
  res.status(201).send(todo);
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.userId });
  res.send(todos);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.userId },
    req.body,
    { new: true }
  );
  if (!todo) return res.status(404).send("Todo not found");
  res.send(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
  if (!todo) return res.status(404).send("Todo not found");
  res.send("Todo deleted");
};
