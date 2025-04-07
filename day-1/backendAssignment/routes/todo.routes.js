const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/auth.middleware");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} = require("../controllers/todo.controller");

router.use(authenticate);

router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
