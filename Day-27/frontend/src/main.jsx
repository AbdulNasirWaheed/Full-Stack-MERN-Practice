// src/main.jsx
// This is the entry point of the React app.
// It takes the <App /> component and renders it into the <div id="root">
// element that exists inside index.html.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// createRoot tells React where to render everything
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
