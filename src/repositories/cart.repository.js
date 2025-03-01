import CartDAO from '../dao/classes/cart.dao.js';

export default class CartRepository {
  constructor() {
    this.dao = new CartDAO();
  }

  async createCart(cart) {
    return await this.dao.createCart(cart);
  }

  async getCartById(cartId) {
    return await this.dao.getCartById(cartId);
  }

  async updateCart(cartId, update) {
    return await this.dao.updateCart(cartId, update);
  }
  
}
