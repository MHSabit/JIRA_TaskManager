const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    ticketName: {  
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    projectID : {
        type: String,
        default: null
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
    ticketFilledBy: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }],
    status: {
        type: String,
        enum: ['Open', 'In Progress','Code Review', 'QA','Done', 'Closed'],
        required: true,
        default: 'Open'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    closedAt: {
        type: Date,
    }
});

const TicketModel = new mongoose.model('Ticket', TicketSchema);
module.exports = TicketModel;