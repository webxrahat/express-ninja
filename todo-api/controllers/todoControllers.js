// @desc Get all todos
// GET /api/todos
// public
const getTodos = (req, res) => {
  res.status(200).json({ message: "get all todos" });
};

// @desc Create a todo
// POST /api/todos
// public

const CreateTodo = (req, res) => {
  console.log(req.body);

  res.status(201).json({ message: "Create a todo" });
};

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
