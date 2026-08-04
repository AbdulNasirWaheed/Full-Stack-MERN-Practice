// src/components/TodoList.jsx
// This component shows the full MERN connection:
//
//   React (this page)  ->  fetch()  ->  Express (backend)  ->  MongoDB
//
// We use useEffect to load data when the component first appears,
// and each button calls the matching CRUD route on the backend:
//   GET    /api/todos    list todos
//   POST   /api/todos    create a todo
//   PUT    /api/todos/:id  update a todo
//   DELETE /api/todos/:id  delete a todo
//
// IMPORTANT: start the backend first (see the README).

import { useEffect, useState } from "react";

const API = "/api/todos";

export default function TodoList() {
  // todos = the list loaded from the database
  // loading = true while the request is in progress
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect runs once when the component mounts (shows on screen)
  async function loadTodos() {
    try {
      setError("");
      const res = await fetch(API);
      const data = await res.json();
      if (data.success) {
        setTodos(data.todos);
      }
    } catch (err) {
      setError("Could not reach the backend. Is it running?");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  // POST - create a new todo from the input box
  async function addTodo(e) {
    e.preventDefault(); // stop the form from reloading the page
    if (!title.trim()) return;

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    if (data.success) {
      setTodos([...todos, data.todo]); // add the new todo to the list
      setTitle("");
    }
  }

  // PUT - toggle a todo between done / not done
  async function toggleTodo(todo) {
    const res = await fetch(`${API}/${todo._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    const data = await res.json();
    if (data.success) {
      // replace the changed todo inside the list
      setTodos(todos.map((t) => (t._id === data.todo._id ? data.todo : t)));
    }
  }

  // DELETE - remove a todo
  async function deleteTodo(id) {
    const res = await fetch(`${API}/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) {
      // keep only the todos that were NOT deleted
      setTodos(todos.filter((t) => t._id !== id));
    }
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Type a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      {error && <p style={{ color: "#b91c1c" }}>{error}</p>}

      {loading ? (
        <p>Loading todos...</p>
      ) : todos.length === 0 ? (
        <p>No todos yet. Add your first one above!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id} className={todo.completed ? "done" : ""}>
              <span>{todo.title}</span>
              <span>
                <button onClick={() => toggleTodo(todo)}>
                  {todo.completed ? "Undo" : "Done"}
                </button>
                <button className="danger" onClick={() => deleteTodo(todo._id)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
