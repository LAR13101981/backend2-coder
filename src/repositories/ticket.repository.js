import TicketDAO from '../dao/classes/ticket.dao.js';

export default class TicketRepository {
  constructor() {
    this.dao = new TicketDAO();
  }

  async createTicket(ticket) {
    return await this.dao.createTicket(ticket);
  }

  async getTicketById(ticketId) {
    return await this.dao.getTicketById(ticketId);
  }
}
