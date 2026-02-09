const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    originalId: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: "Admin" }
}, {
    timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;