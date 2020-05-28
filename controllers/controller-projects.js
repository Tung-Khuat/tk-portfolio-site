const express = require('express');

const router = express.Router();
const Middleware = require('./middlewares');

const ProjectsModel = require('../models/model-projects');
const ProjectsSchema = require('../models/schema-projects.js');

// GET ALL PROJECTS
router.get('/', async (req, res ) => {
    try {
        const projectsList = await ProjectsModel.find()
        res.json(projectsList)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// POST NEW PROJECT
router.post('/', async (req, res) => {
    const newProjectObject = {};
    for (const key in ProjectsSchema) {
        if (ProjectsSchema.hasOwnProperty(key) && req.body[key]) {
            newProjectObject[key] = req.body[key];
        }
    }

    const newProject = new ProjectsModel(newProjectObject);

    try {
        const newProjectSaved = await newProject.save();
        console.log(newProjectSaved)
        res.status(201).json(newProjectSaved);   
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;