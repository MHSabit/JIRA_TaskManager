const mongoose = require('mongoose');
const TicketModel = require('../Schema/TicketSchema');
const Ticket = {};


Ticket.getAllTickets = async (req, res) => {
    res.send("get all tickets");
};

Ticket.getAllTicketsByProject = async (req, res) => {
    res.send("get all tickets by project");
};

Ticket.CreateTicket = async (req, res) => {
    const createTicket = await TicketModel.create(req.body);
    console.log(createTicket);
    res.send(createTicket);
};

Ticket.updateTicket = async (req, res) => {
    res.send("update ticket");
}

Ticket.deleteTicket = async (req, res) => {
    res.send("delete ticket");
}


module.exports = Ticket;