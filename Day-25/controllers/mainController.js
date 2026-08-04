const mongoose = require('mongoose');
const Blog = require('../models/Blog');
const removeFile = require('../service/removeFile');
async function createBlog(req, res) {
    try {
        const payload = {
            ...req.body,
            thumbnail: req.file && req.file.size > 0 ? req.file.filename : ""
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
async function getBlog(req, res) {
    try {
        const blogs = await Blog.find();
        if (!blogs || blogs.length === 0) {
            return res.status(404).send({ success: false, message: "No blog posts found" });
        }
        res.status(200).send({ success: true, data: blogs });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Error fetching blog posts" });
    }
}
async function deleteBlog(req, res) {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ success: false, message: "Invalid blog post id" });
        }
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).send({ success: false, message: "Failed to delete blog post" });
        }
        removeFile(blog.thumbnail);
        await Blog.findByIdAndDelete(id);
        res.status(200).send({ success: true, message: "Blog post deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Error deleting blog post" });
    }
}

async function updateBlog(req, res) {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ success: false, message: "Invalid blog post id" });
        }
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).send({ success: false, message: "Blog post not found" });
        }
        const hasNewFile = req.file && req.file.size > 0;
        if (hasNewFile)
            removeFile(blog.thumbnail);

        const payload = {
            ...req.body,
            thumbnail: hasNewFile ? req.file.filename : blog.thumbnail
        };

        await Blog.findByIdAndUpdate(id, payload);
        res.status(200).send({ success: true, message: "Blog post updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Error updating blog post" });
    }
}

module.exports = {
    createBlog,
    getBlog,
    deleteBlog,
    updateBlog
};