# Day 27 - Answer Key

Answers to all 100 questions about the React + MERN learning code.
Each answer refers to the files in this folder (`backend/` and `frontend/`).

---

## General MERN (1–10)

**1. What do the letters in MERN stand for?**
MongoDB, Express, React, Node.js.

**2. Which layer is `backend/server.js` — MongoDB, Express, React, or Node?**
Node (it runs on Node) and Express (it creates the server). Together they are the backend.

**3. Which layer is the `frontend/src` folder?**
React — it holds the components that run in the browser.

**4. What is MongoDB used for in this project?**
It is the database. It stores the todos in a collection called `todos`.

**5. What is Express used for?**
It is the web framework that creates the HTTP server, defines routes, and sends JSON responses.

**6. What is the role of Node.js in this project?**
It is the runtime that executes all the JavaScript outside the browser — both `server.js` and Vite.

**7. What is the flow of data when a React user clicks "Add Todo"?**
React sends a `POST /api/todos` request → Express route matches it → controller calls `Todo.create()` → data is saved in MongoDB → a JSON response returns to React → React adds it to the list with `setTodos`.

**8. Why do we need both a backend and a frontend? Can't React talk to MongoDB directly?**
MongoDB does not accept browser connections; it has no HTTP API and browsers cannot run Mongo drivers securely. An Express backend is the safe bridge between them.

**9. What does CRUD stand for, and which 4 routes map to it?**
Create → `POST /api/todos`; Read → `GET /api/todos` and `GET /api/todos/:id`; Update → `PUT /api/todos/:id`; Delete → `DELETE /api/todos/:id`.

**10. In what order do the MERN layers process a request: React → ? → MongoDB?**
React (frontend) → Express (routes/controllers) → Mongoose → MongoDB → back the same way.

## Setup & Running (11–20)

**11. Why do we run `npm install` before running the project?**
It downloads all the dependencies listed in `package.json` into `node_modules` so the code can run.

**12. What port does the backend use by default? Where is that configured?**
5000. It is set in the `.env` file as `PORT=5000` and read with `process.env.PORT` in `server.js`.

**13. What port does the frontend (Vite) use by default?**
5173.

**14. Why is MongoDB required to be running before the backend starts?**
`server.js` calls `mongoose.connect()` before `app.listen()`. If the database is down, the server exits with an error.

**15. What does `npm run dev` do in the backend folder?**
Runs `node --watch server.js`, which starts the server and auto-restarts it when files change.

**16. What does `npm run dev` do in the frontend folder?**
Starts the Vite dev server (port 5173) with hot module replacement — the page updates live as you edit.

**17. What is the difference between `npm run dev` and `npm start` in the backend?**
`npm start` runs plain `node server.js` (no restart on changes); `npm run dev` uses `node --watch` so it restarts automatically.

**18. Which file do you edit to change the database connection string?**
`backend/.env` → the `MONGO_URI` line.

**19. What is the purpose of the `.env` file, and why should it be in `.gitignore`?**
It stores secrets and machine-specific settings (database URL, port). It is ignored by git so credentials are never committed publicly.

**20. Why do the backend and frontend have separate `package.json` files?**
Each is an independent app with its own dependencies, scripts, and lifecycle. Combining them would mix server and browser libraries unnecessarily.

## Backend: server.js (21–35)

**21. What does `require("dotenv").config()` do?**
It reads the `.env` file and loads its variables into `process.env`.

**22. What is the purpose of `express.json()` middleware?**
It parses incoming JSON request bodies and puts the data into `req.body`.

**23. What problem does `cors()` solve?**
It adds headers that let the frontend on port 5173 call the backend on port 5000. Without it, browsers block the request (CORS error).

**24. What would happen if we removed `app.use(express.json())`?**
`req.body` would be `undefined` in the controllers, so creating/updating todos would fail.

**25. Why is `app.use("/api/todos", todoRoutes)` used instead of writing routes directly in server.js?**
It keeps `server.js` short and organized. All todo routes live in one file, and their paths automatically get the `/api/todos` prefix.

**26. What does `app.get("/", ...)` do?**
It defines the home route that returns a simple welcome message so you can check the server is alive.

**27. Why is the server started *inside* `connectDB()` and not at the top level?**
We only want to serve requests once the database connection is ready. Otherwise requests could arrive before the DB is reachable.

**28. What does `mongoose.connect()` return, and why do we `await` it?**
It returns a Promise. Awaiting it pauses execution until the connection succeeds or fails, so we can handle both cases.

**29. What is `process.env.MONGO_URI`?**
The database connection string loaded from the `.env` file.

**30. What happens if MongoDB connection fails? Why do we call `process.exit(1)`?**
We log the error and stop the process. Exiting with code 1 signals a failure so the app does not run half-broken.

**31. What does `app.listen(PORT, callback)` do?**
It makes Express start listening for HTTP requests on the given port and runs the callback once it is up.

**32. Why do we use `async/await` in `connectDB`?**
To write asynchronous database code that reads like normal sequential code, with try/catch for errors.

**33. What does the `try/catch` block in `connectDB` protect against?**
A failed database connection (invalid URI, Mongo not running, etc.) so the error is logged cleanly instead of crashing.

**34. What URL would you visit in a browser to see the welcome message?**
http://localhost:5000/

**35. Why is the route path `/api/todos` instead of just `/todos`?**
The `/api` prefix is a common convention that marks routes as data endpoints and avoids clashes with frontend routes.

## Backend: Models (36–45)

**36. What is a Mongoose schema?**
An object that describes the shape of a document: the fields and their types/rules.

**37. What is a Mongoose model, and how is it different from a schema?**
A schema is the definition; the model is the compiled, usable version with methods like `find()`, `create()`, `deleteOne()` that talk to the database.

**38. In `models/Todo.js`, what does `required: true` do?**
MongoDB will reject a document that does not have a `title`.

**39. What is the default value of `completed` if you don't send it?**
`false`, because of `default: false`.

**40. What does `default: Date.now` do?**
Fills in `createdAt` automatically with the current date/time if none is provided.

**41. What MongoDB collection name does the `Todo` model map to, and why?**
`todos`. Mongoose lowercases the model name and makes it plural automatically.

**42. Why do we export the model with `module.exports`?**
So the controllers can `require()` it and run queries against the `todos` collection.

**43. What are the three fields in the Todo schema?**
`title` (String, required), `completed` (Boolean, default false), and `createdAt` (Date, default now). MongoDB also adds `_id`.

**44. Why is `title` a String but `completed` a Boolean?**
A title is text, while "done/not done" is a yes/no value — the types match the real-world meaning of the data.

**45. What is `_id` in MongoDB, and where does it come from?**
It is the unique identifier of every document, automatically generated by MongoDB when a document is created.

## Backend: Routes (46–52)

**46. What is a route in Express terms?**
A combination of an HTTP method (GET/POST/...) and a URL path that maps to a handler function.

**47. What does `express.Router()` do?**
Creates a modular, mountable group of routes that can be attached to the app with `app.use()`.

**48. Why do we separate routes from controllers?**
Routes only declare "which URL does what"; controllers contain the actual logic. This keeps each file small and focused.

**49. What does `router.get("/:id", ...)` mean? What does `:id` represent?**
It defines a route that captures a value from the URL. `:id` is a placeholder, e.g. `/api/todos/abc123` makes `req.params.id` equal `"abc123"`.

**50. How many routes are defined in `todoRoutes.js`?**
Five: GET all, GET one, POST create, PUT update, DELETE.

**51. What is the difference between `router.get` and `router.post`?**
`get` reads data; `post` creates data. They respond to different HTTP methods on the same URL.

**52. Why does the routes file not contain any database logic?**
That logic lives in the controllers, which routes simply import and call.

## Backend: Controllers (53–70)

**53. What does `Todo.find({})` do?**
Returns an array of all todos in the `todos` collection (empty object = no filter).

**54. What does `Todo.findById(id)` do?**
Returns the single todo matching that `_id`, or `null` if none exists.

**55. What does `Todo.create({ title })` do?**
Builds a new todo document from the given data and saves it to MongoDB, returning the saved document.

**56. What does `Todo.findByIdAndUpdate` do?**
Finds a todo by id, applies the changes from `req.body`, and returns the updated document.

**57. What does `Todo.findByIdAndDelete` do?**
Finds a todo by id and removes it from the collection.

**58. What is `req.params.id`?**
The value captured from the URL's `:id` placeholder (the todo's `_id`).

**59. What is `req.body`, and where does its data come from?**
The parsed JSON the client sent in the request body (made available by `express.json()`).

**60. Why does `createTodo` check `if (!title)` and return a 400?**
To validate input early: a todo without a title is meaningless, and 400 means "bad request from the client".

**61. What does HTTP status code 200 mean? 201? 400? 404? 500?**
200 = OK; 201 = Created; 400 = Bad Request (client error); 404 = Not Found; 500 = Internal Server Error.

**62. Why do controllers return JSON with `{ success: true, ... }`?**
It gives the frontend a consistent, easy-to-check "did it work?" flag before reading the data.

**63. What does `res.status(...).json(...)` do?**
Sets the HTTP status code and sends a JSON response to the client.

**64. Why is each controller wrapped in try/catch?**
So unexpected database/validation errors are caught and returned as a clean 500 JSON response instead of crashing the server.

**65. What is the difference between `res.status(404).json(...)` and just `res.json(...)`?**
`res.status(404).json(...)` sends a 404 status; plain `res.json(...)` defaults to 200. The status tells the client whether the request was successful.

**66. In `updateTodo`, what does `returnDocument: "after"` do?**
Tells Mongoose to return the updated document rather than the pre-update version.

**67. What does `runValidators: true` do?**
Re-applies schema rules (like `required`) during update operations, not just on create.

**68. Why do we `return` inside the `if (!todo)` block in `getSingleTodo`?**
To stop the function immediately so we don't send two responses. Without it, the code would also reach the `res.json(...)` below.

**69. What happens in `deleteTodo` if the id doesn't exist in the database?**
`findByIdAndDelete` returns `null`, the `if (!todo)` block runs, and we respond with 404.

**70. Why does the delete response include the `id`?**
So the client can confirm exactly which todo was removed.

## Frontend: React Basics (71–82)

**71. What does `useState` do, and what does it return?**
It adds state to a component and returns `[value, setValue]` — the current value and a function to change it.

**72. Why can't we change state directly (e.g., `count = count + 1`)?**
React would not know the value changed, so the UI would not re-render. State must be updated with the setter function, which schedules a re-render.

**73. In Counter, what triggers a re-render?**
Calling `setCount(...)` with a new value. React re-runs the component and shows the new `count`.

**74. What is the purpose of `onClick={() => setCount(count + 1)}`?**
It registers a click handler that increments the counter each time the button is clicked.

**75. Why does Counter use three buttons instead of one?**
Each button demonstrates a different state update: increment, decrement, and reset to zero.

**76. What does `useEffect(() => {...}, [])` do, and why is the array empty?**
It runs the effect once, after the component first renders. The empty dependency array means "run only on mount".

**77. What would happen if we removed the empty `[]` array from `useEffect`?**
The effect would run after every render, causing an infinite loop of fetching + re-rendering.

**78. What is JSX, and why can we write HTML-looking code inside JavaScript?**
JSX is a JavaScript syntax extension React converts into browser elements. It makes component markup readable and familiar.

**79. In `main.jsx`, what does `ReactDOM.createRoot(...).render(...)` do?**
It attaches React to the `<div id="root">` element and renders the `<App />` component inside it.

**80. What is the purpose of `<React.StrictMode>`?**
It enables extra development checks/warnings (and intentionally double-runs effects in dev) to help catch bugs early.

**81. What is a component? Why is App made of smaller components?**
A component is a reusable function that returns JSX. Splitting into smaller components keeps code readable, reusable, and each part focused.

**82. How do components get combined, e.g., `<Counter />` inside App?**
You write the component name as a tag inside another component's JSX. App acts as the parent that renders both Counter and TodoList.

## Frontend: MERN Data Flow (83–95)

**83. What does `fetch("/api/todos")` return, and why do we call `.json()` on it?**
It returns a Promise resolving to a `Response` object. `.json()` parses the response body from JSON into a JavaScript object.

**84. Why can the frontend use the short URL `/api/todos` instead of `http://localhost:5000/api/todos`?**
The Vite dev server proxies requests starting with `/api` to `http://localhost:5000`, so the browser only sees the relative path.

**85. What does the Vite proxy in `vite.config.js` do?**
It forwards any request to `/api/...` from the frontend to the backend server, avoiding CORS issues and hardcoded URLs.

**86. In `addTodo`, what does `headers: { "Content-Type": "application/json" }` do?**
It tells the backend the request body is JSON so `express.json()` can parse it.

**87. Why do we `JSON.stringify` the body before sending it?**
`fetch` bodies must be a string (or FormData/Blob), so the object is serialized to a JSON string before sending.

**88. In `toggleTodo`, how do we build the URL to update a specific todo?**
Template literal: `` `${API}/${todo._id}` `` produces something like `/api/todos/abc123`, targeting that one todo.

**89. What is `todo._id` and why is it used in the URL?**
It is the MongoDB document id — the unique value that tells the backend which todo to update or delete.

**90. Why do we use `.map` to update the todos list and `.filter` to remove?**
`.map` returns a new array with one element replaced (update); `.filter` returns a new array keeping all but the deleted one. React needs a new array reference to re-render.

**91. What does `setTodos([...todos, data.todo])` do? Why the spread `...`?**
It creates a new array containing the old todos plus the new one. The spread copies the existing items so they are not lost.

**92. What does the `key={todo._id}` prop do, and why is it important?**
It gives each list item a stable identity so React can efficiently track added/removed/reordered items. Duplicate or missing keys cause bugs.

**93. Why is `className={todo.completed ? "done" : ""}` used?**
It conditionally adds the `done` CSS class (which strikes through the text) only when the todo is completed.

**94. What happens if the backend is not running when TodoList loads? Where is that handled?**
`fetch` rejects, the `catch` block sets the `error` state, and the message "Could not reach the backend. Is it running?" is shown instead of the list.

**95. What is the `loading` state for, and why do we set it false in `finally`?**
It shows "Loading todos..." until the fetch finishes. Setting it in `finally` guarantees it clears whether the request succeeded or failed.

## Debugging & Concept Review (96–100)

**96. What is the purpose of the `error` state in TodoList?**
It holds a friendly message when a request fails, so the user sees what went wrong instead of a blank page.

**97. Why does `addTodo` call `e.preventDefault()`?**
Submitting a form normally reloads the page. `preventDefault()` stops that so React can handle the submission without losing state.

**98. What would you check first if `GET /api/todos` shows "Could not reach the backend"?**
That the backend is actually running (`cd backend; npm run dev`) and that MongoDB is connected (look for "MongoDB connected" in the backend console).

**99. Why is the backend started with MongoDB running, but the frontend can start without the backend?**
The backend refuses to start without a database (it exits on connection failure). The frontend is just static UI — it only needs the backend once you actually fetch data, and it shows an error if the API is down.

**100. Explain the full journey of one todo from typing it in React to seeing it in the list again — naming every layer involved.**
1. User types a title → React stores it in `title` state.
2. User submits the form → `addTodo` calls `e.preventDefault()` and sends `POST /api/todos` with a JSON body via `fetch`.
3. The Vite proxy forwards `/api/todos` to `http://localhost:5000`.
4. Express routes the POST to `createTodo` in the controller.
5. The controller validates `title`, calls `Todo.create({ title })`, and Mongoose saves a new document into the `todos` collection in MongoDB.
6. The saved document is returned as JSON with `{ success: true, todo }`.
7. `addTodo` runs `setTodos([...todos, data.todo])`, updating React state.
8. React re-renders TodoList and the new todo appears in the `<ul>` with its `_id` as the `key`.
