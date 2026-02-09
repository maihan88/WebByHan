const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    originalId: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: false },
    description: { type: String },
    location: { type: String },
    area: { type: String },
    year: { type: String },
    gallery: [{ type: String }]
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;