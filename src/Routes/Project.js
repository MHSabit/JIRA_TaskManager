const ProjectController = require('../Controller/ProjectController');
const express = require('express');
const projectRouter = express.Router();


// get all project or project dashboard
projectRouter.get('/', ProjectController.getAllProjects);

// create a project
projectRouter.post('/', ProjectController.CreateProject);

module.exports = projectRouter;