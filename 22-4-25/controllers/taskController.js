import { createTask, getAllTasks, toggleTaskStatus } from '../models/taskModel.js';

export const postTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  const task = createTask(title);
  res.status(201).json(task);
};

export const getTasks = (req, res) => {
  const { status } = req.query;
  const tasks = getAllTasks(status);
  res.json(tasks);
};

export const patchTask = (req, res) => {
  const { id } = req.params;
  const task = toggleTaskStatus(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  res.json(task);
};
