const express = require('express');
const path = require('path');
const router = require('./routes/route');
const dbcon = require('./config/dbcon');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 80;

dbcon().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});   