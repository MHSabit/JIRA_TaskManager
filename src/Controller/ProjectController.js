const ProjectModel = require("../Schema/ProjectSchema");
const ProjectController = {};

ProjectController.CreateProject = async(req, res) => {
    console.log(req.body);
    const findProject = await ProjectModel.findOne({projectName: req.body.projectName});
    console.log(findProject);
    if(findProject){
        console.log('findProject');
        return res.status(400).json({
            message: 'Project already exists'
        });
    }
    else{
        console.log('createProject');
        const createProject = await ProjectModel.create(req.body);
        res.status(200).json({
            message: 'Project created successfully',
            createdProject : createProject  
        });
    }
}

ProjectController.getAllProjects = async(req, res) => {
    const allProjects = await ProjectModel.find();
    res.status(200).json({
        message: 'All Projects',
        allProjects
    });
}

module.exports = ProjectController;