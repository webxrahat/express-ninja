const asyncHandler = require("express-async-handler");
const Todo = require("../models/todosModel");

// @desc Get all todos
// GET /api/todos
// public
const getTodos = (req, res) => {
  res.status(200).json({ message: "get all todos" });
};

// @desc Create a todo
// POST /api/todos
// public

const CreateTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error(`All Field are mandatory`);
  }

  const todo = await Todo.create({
    title,
    description,
  });

  res.status(201).json(todo);
});
// @desc Get a todo
// GET /api/todos/:id
// public

const getTodo = (req, res) => {
  res.status(200).json({ message: `get todo ${req.params.id}` });
};

// @desc Update a todo
// PUT /api/todos/:id
// public

const updateTodo = (req, res) => {
  res.status(200).json({ message: `update todo ${req.params.id}` });
};

// @desc Delete a todo
// DELETE /api/todos/:id
// public

const deleteTodo = (req, res) => {
  res.status(200).json({ message: `Delete todo ${req.params.id}` });
};

module.exports = { getTodos, getTodo, CreateTodo, updateTodo, deleteTodo };
