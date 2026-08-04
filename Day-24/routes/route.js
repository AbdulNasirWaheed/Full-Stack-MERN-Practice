const express = require('express');
const router = express.Router();
const { createBlog } = require('../controllers/mainController');
router.post("/create-blog",upload.single("thumbnail"), createBlog);

router.post("/create-blog", upload.single("thumbnail"), createBlog);

module.exports = router;