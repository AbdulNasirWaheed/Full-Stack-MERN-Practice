// src/App.jsx
// App is the "parent" component. It groups the smaller components
// so the page shows everything together.

import Counter from "./components/Counter.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
  return (
    <div>
      <h1>Day 27 - React + MERN Basics</h1>

      {/* 1. React basics: state, props, events */}
      <div className="card">
        <h2>1. React State - Counter</h2>
        <Counter />
      </div>

      {/* 2. Full MERN: React fetches from the Express + MongoDB backend */}
      <div className="card">
        <h2>2. MERN CRUD - Todo List (from the backend)</h2>
        <TodoList />
      </div>
    </div>
  );
}
