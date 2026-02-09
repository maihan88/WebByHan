// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const Project = require('./models/Project'); // Import Model
const Blog = require('./models/Blog');       // Import Model

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// --- API ROUTES ---

// 1. Lấy danh sách tất cả Projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 2. Lấy chi tiết 1 Project theo ID
app.get('/api/projects/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 3. Lấy danh sách tất cả Blogs
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 4. Lấy chi tiết 1 Blog theo ID
app.get('/api/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 5. API Tìm kiếm dự án (Theo tên)
app.get('/api/projects/search/query', async (req, res) => {
    try {
        const keyword = req.query.q; // Lấy từ khóa từ URL ?q=...
        if (!keyword) {
            return res.json([]);
        }
        
        // Tìm kiếm không phân biệt hoa thường (regex 'i')
        const projects = await Project.find({
            name: { $regex: keyword, $options: 'i' }
        });
        
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 6. API Gửi liên hệ (POST)
app.post('/api/contact', async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;

        // Tạo bản ghi mới
        const newContact = new Contact({
            name,
            phone,
            email,
            message
        });

        // Lưu vào DB
        const savedContact = await newContact.save();
        
        res.status(201).json({ 
            success: true, 
            data: savedContact,
            message: "Gửi liên hệ thành công!" 
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});