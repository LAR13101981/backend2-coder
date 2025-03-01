import CartModel from '../models/cart.model.js';

export default class CartDAO {
  constructor() {}

  createCart = async (cart) => {
    return await CartModel.create(cart);
  };

  getCartById = async (cartId) => {
    return await CartModel.findById(cartId);
  };

  updateCart = async (cartId, update) => {
    return await CartModel.findByIdAndUpdate(cartId, update, { new: true });
  };

  removeProduct
  
}
