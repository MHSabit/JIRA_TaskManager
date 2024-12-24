const express = require('express');
const ticketRouter = express.Router();
const TicketController = require('../Controller/TicketController');


// get all ticket of all Projects
ticketRouter.get('/', TicketController.getAllTickets);

// get all ticket by project
ticketRouter.get('/:projectId', TicketController.getAllTicketsByProject);

// create a ticket
ticketRouter.post('/', TicketController.CreateTicket);

// update a ticket by ticketId
ticketRouter.put('/:ticketId', TicketController.updateTicket);

// delete a ticket by ticketId
ticketRouter.delete('/:ticketId', TicketController.deleteTicket);

module.exports = ticketRouter;