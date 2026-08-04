const express = require('express');
const path = require('path');
const router = express.Router();
const { createBlog, getBlog, deleteBlog, updateBlog } = require('../controllers/mainController');
const upload = require('../service/moveFile');
router.get("/create-blog", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/create-blog.html'));
});
router.post("/create-blog", upload.single("thumbnail"), createBlog);
router.get("/get-blog",getBlog);
router.delete("/delete-blog/:id", deleteBlog);
router.put("/update-blog/:id", upload.single("thumbnail"), updateBlog);
module.exports = router;