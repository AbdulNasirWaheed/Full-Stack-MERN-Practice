// controllers/todoController.js
// Controllers contain the actual logic for each route.
// Each function is an async function that talks to MongoDB via the Model.

const Todo = require("../models/Todo");

// GET /api/todos  -> read ALL todos
async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ success: true, count: todos.length, todos });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// GET /api/todos/:id  -> read ONE todo by its id
async function getSingleTodo(req, res) {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    res.status(200).json({ success: true, todo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// POST /api/todos  -> create a new todo
// The data comes from the request body, e.g. { "title": "Learn React" }
async function createTodo(req, res) {
  try {
    const { title } = req.body;
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }
    const todo = await Todo.create({ title });
    res.status(201).json({ success: true, todo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// PUT /api/todos/:id  -> update a todo (for example, mark it complete)
async function updateTodo(req, res) {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after", // return the UPDATED todo, not the old one
      runValidators: true, // check required fields before saving
    });
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    res.status(200).json({ success: true, todo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// DELETE /api/todos/:id  -> delete a todo
async function deleteTodo(req, res) {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Todo deleted", id: req.params.id });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
