import UserRepository from './user.repository.js';
import ProductRepository from './product.repository.js';
import TicketRepository from './ticket.repository.js';
import CartRepository from './cart.repository.js';

export const userRepo = new UserRepository();
export const productRepo = new ProductRepository();
export const cartRepo = new CartRepository();
export const ticketRepo = new TicketRepository();
