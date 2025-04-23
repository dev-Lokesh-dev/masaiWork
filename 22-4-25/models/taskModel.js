let tasks = [];
let id = 1;

export const createTask = (title) => {
  const task = { id: id++, title, status: 'todo' };
  tasks.push(task);
  return task;
};

export const getAllTasks = (status) => {
  return status ? tasks.filter(task => task.status === status) : tasks;
};

export const toggleTaskStatus = (taskId) => {
  const task = tasks.find(t => t.id === parseInt(taskId));
  if (!task) return null;

  const statusOrder = ['todo', 'in-progress', 'done'];
  const currentIndex = statusOrder.indexOf(task.status);
  task.status = statusOrder[(currentIndex + 1) % statusOrder.length];
  return task;
};
