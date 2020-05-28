const mongoose = require('mongoose');
const ProjectsSchema = require('./schema-projects');

const projectsListSchema = new mongoose.Schema(ProjectsSchema);

module.exports = mongoose.model('projects', projectsListSchema);