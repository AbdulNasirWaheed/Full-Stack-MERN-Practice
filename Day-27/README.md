# Day 27 - React + MERN Basics

Beginner-level learning code for **React** and the **MERN stack**
(**M**ongoDB + **E**xpress + **R**eact + **N**ode).

## What's inside

```
Day-27/
├── backend/               Express + Mongoose API (Node side)
│   ├── server.js          Server entry point + MongoDB connection
│   ├── models/Todo.js     Mongoose schema (shape of the data)
│   ├── routes/todoRoutes.js   URL addresses of the API
│   ├── controllers/todoController.js   Logic for each route (CRUD)
│   └── .env               Your MONGO_URI + PORT (copy from .env.example)
└── frontend/              React app (Vite)
    ├── src/App.jsx        Parent component that groups the examples
    ├── src/components/Counter.jsx    React state basics (useState)
    ├── src/components/TodoList.jsx   Full MERN CRUD (fetch + backend)
    └── vite.config.js     Proxies /api to the backend
```

## What you will learn

1. **React state** (`useState`) — the Counter component shows how a component
   remembers data and re-renders when it changes.
2. **React effects** (`useEffect`) — the TodoList loads todos from the database
   the first time the page appears.
3. **MERN connection** — React calls the Express API with `fetch()`, Express
   talks to MongoDB through Mongoose, and the data flows back to React.
4. **CRUD** — Create, Read, Update, Delete are implemented in both the
   controller and the React component.

## How to run

You need **Node.js** and **MongoDB** installed.

### 1. Start MongoDB
Make sure your local MongoDB is running, e.g.:
```bash
mongod
```

### 2. Start the backend
```bash
cd backend
npm install          # first time only
npm run dev          # starts on http://localhost:5000
```

Optional: the `.env` file is already created with a local connection string.
Change it in `.env` if you use MongoDB Atlas.

Test it in the browser: http://localhost:5000/api/todos

### 3. Start the frontend
In a second terminal:
```bash
cd frontend
npm install          # first time only
npm run dev          # starts on http://localhost:5173
```

Open http://localhost:5173 in your browser and try the Counter and the Todo
List. Adding, toggling, and deleting todos writes real data to MongoDB.

## API reference

| Method   | URL                  | What it does             |
| -------- | -------------------- | ------------------------ |
| `GET`    | `/api/todos`         | List all todos           |
| `GET`    | `/api/todos/:id`     | Get one todo by id       |
| `POST`   | `/api/todos`         | Create a todo            |
| `PUT`    | `/api/todos/:id`     | Update a todo            |
| `DELETE` | `/api/todos/:id`     | Delete a todo            |

## Notes

- The backend only starts listening after MongoDB connects successfully.
- CORS is enabled so the React app (port 5173) can call the backend (port 5000);
  the Vite proxy does this automatically during development.
