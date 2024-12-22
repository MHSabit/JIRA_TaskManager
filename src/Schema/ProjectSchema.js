const e = require('express');
const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isActive : {
        type: Boolean,
        default: false
    },
    priority:{
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: false,
        default: 'Low'
    },
    TicketID : [{
        type : Array,
        default: [1,2,3,4,5,6,7]
    }]
});

const ProjectModel = new mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;