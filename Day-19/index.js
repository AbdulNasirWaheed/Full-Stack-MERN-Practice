const express = require('express');
const app = express();
const port = 3000;

// route level middleware to check if the user is logged in
function isLogin(req, res, next) {
  const isLoggedIn = true; // Replace with your actual login check logic

  if (isLoggedIn) {
    next(); // User is logged in, proceed to the next middleware or route handler
  } else {
    res.status(401).send('Login is required'); // User is not logged in, send an error response
  }     
}

function isAdmin(req, res, next) {
  const isAdminUser = "admin"; //Replace with your actual admin check logic
  
  if (isAdminUser === "admin") {  
    next(); // User is an admin, proceed to the next middleware or route handler
  } else {
    res.status(403).send('Access denied'); // User is not an admin, send an error response
  }  
}

app.use(isLogin); // Apply the isLogin middleware to all routes

app.get('/',isLogin, (req, res) => {
  res.send("<h1>Home page </h1>");
});

app.get('/about', (req, res) => {
  res.send("<h1>About page </h1>");
});   

app.get('/contact', (req, res) => {
  res.send("<h1>Contact page </h1>");
});

app.get('/services', (req, res) => {
  res.send("<h1>Services page </h1>");
});

app.get('/products', (req, res) => {
  res.send("<h1>Products page </h1>");
});

app.get('/blog', (req, res) => {
  res.send("<h1>Blog page </h1>");
}); 

app.get('/faq', (req, res) => {
  res.send("<h1>FAQ page </h1>");
});

app.get('/admin/dashboard',isAdmin, (req, res) => { 
  res.send("<h1>Admin Dashboard page </h1>");
});

app.listen(40, () => {
  console.log(`Server is running on http://localhost:40 `);
});