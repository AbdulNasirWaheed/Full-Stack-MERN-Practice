const express = require('express');
const router = require('./routes/route');
const dbcon = require('./config/dbcon');
const app = express();

dbcon();

app.use(express.json());

app.use(router)

app.listen(80, () => {
    console.log("Server is running on port 80");
})   