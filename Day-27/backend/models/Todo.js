// models/Todo.js
// A "model" is Mongoose's way of describing how a document looks in MongoDB.
// We write a "schema" (the shape of the data), then export a model built from it.

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  // title is a string and it MUST be present (required: true)
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false, // if not given, it starts as false
  },
  createdAt: {
    type: Date,
    default: Date.now, // automatically filled with today's date
  },
});

// "Todo" is the name of the model. Mongoose uses it to talk to the
// "todos" collection in MongoDB.
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
