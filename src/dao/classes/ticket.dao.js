import TicketModel from '../models/ticket.model.js';

export default class TicketDAO {
  constructor() {}

  createTicket = async (ticket) => {
    return await TicketModel.create(ticket);
  };

  getTicketById = async (ticketId) => {
    return await TicketModel.findById(ticketId);
  };
}
