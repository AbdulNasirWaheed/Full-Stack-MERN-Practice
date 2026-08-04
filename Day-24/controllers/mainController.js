const Blog = require('../models/Blog');

async function createBlog(req, res) {
    try {
        const payload = {
            ...req.body,
            thumbnail: req.file ? req.file.filename : ""
        };

        const blog = await Blog.create(payload);
        if (!blog) {
            return res.status(400).send({ success: false, message: "Failed to create blog post" });
        }
        res.status(201).send({ success: true, message: "Blog post created successfully" });
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            return res.status(400).send({ success: false, message: error.message });
        }
        res.status(500).send({ success: false, message: "Error creating blog post" });
    }
}
module.exports = {
    createBlog
};