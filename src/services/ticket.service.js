import { ticketRepo } from '../repositories/index.js';
import { cartRepo } from '../repositories/index.js';
import ProductModel from '../models/product.model.js';

export const completePurchase = async (userId) => {
  try {
    const cart = await cartRepo.getCartById(userId);
    if (!cart) throw new Error('Cart not found');

    let totalAmount = 0;
    const productsToUpdate = [];

    for (const item of cart.products) {
      const product = await ProductModel.findById(item.productId);
      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for product ${product.title}`);
      }
      totalAmount += product.price * item.quantity;
      productsToUpdate.push({ product, quantity: item.quantity });
    }

    for (const { product, quantity } of productsToUpdate) {
      product.stock -= quantity;
      await product.save();
    }

    const ticketData = {
      amount: totalAmount,
      purchaser: userId,
      products: cart.products,
    };

    const ticket = await ticketRepo.createTicket(ticketData);
    return ticket;
  } catch (error) {
    throw new Error(error.message);
  }
};
