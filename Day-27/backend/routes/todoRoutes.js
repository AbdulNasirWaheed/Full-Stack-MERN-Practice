// routes/todoRoutes.js
// Routes are the "addresses" the client (React app) can call.
// We split the logic into a controller file so routes stay clean.

const express = require("express");
const {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getAllTodos);
router.get("/:id", getSingleTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
