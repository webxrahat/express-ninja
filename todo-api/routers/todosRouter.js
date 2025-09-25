const express = require("express");
const {
  getTodos,
  getTodo,
  CreateTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");
const router = express.Router();

router.route("/").get(getTodos).post(CreateTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;
