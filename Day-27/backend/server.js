// server.js
// This is the entry point of the backend (the "Express" + "Mongoose" part of MERN).
//
// MERN = MongoDB + Express + React + Node.
// - MongoDB : the database (we connect with Mongoose)
// - Express : the server that answers HTTP requests
// - React   : the frontend (see the ../frontend folder)
// - Node    : the runtime that runs this file

require("dotenv").config(); // load variables from the .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

// 1. Middleware
// express.json() lets us read JSON data sent in the request body
app.use(express.json());
// cors() allows the React app (a different port) to call this server
app.use(cors());

// 2. Routes
// Anything starting with /api/todos goes to the todo routes
app.use("/api/todos", todoRoutes);

// A simple test route to check the server is alive
app.get("/", (req, res) => {
  res.send("Welcome to the Day-27 backend! Try /api/todos");
});

// 3. Connect to MongoDB
// The connection string lives in the .env file.
// Start your local MongoDB (mongod) or use MongoDB Atlas before running.
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // 4. Start the server only AFTER the database connects
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

connectDB();
