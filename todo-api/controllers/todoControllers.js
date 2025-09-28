const asyncHandler = require("express-async-handler");
const Todo = require("../models/todosModel");

// @desc Get all todos
// GET /api/todos
// public
const getTodos = asyncHandler(async (req, res) => {
 const todos = await Todo.find();
 res.status(200).json(todos);
});

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

const getTodo = asyncHandler(async (req, res) => {
 const todo = await Todo.findById(req.params.id);

 if (!todo) {
  res.status(404);
  throw new Error("Contact not found");
 }
 res.status(200).json(todo);
});

// @desc Update a todo
// PUT /api/todos/:id
// public

const updateTodo = asyncHandler(async (req, res) => {
 const todo = await Todo.findById(req.params.id);
 if (!todo) {
  res.status(404);
  throw new Error("Contact not Found");
 }

 const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
 });
 res.status(200).json(updatedTodo);
});

// @desc Delete a todo
// DELETE /api/todos/:id
// public

const deleteTodo = asyncHandler(async (req, res) => {
 const todo = await Todo.findById(req.params.id);
 if (!todo) {
  res.status(404);
  throw new Error("Contact not found");
 }
 await Todo.deleteOne();
 res.status(200).json(todo);
});

module.exports = { getTodos, getTodo, CreateTodo, updateTodo, deleteTodo };
