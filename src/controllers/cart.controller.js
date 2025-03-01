import {
  addProductToCart,
  removeProductFromCart,
  getCartByUserId,
} from '../services/cart.service.js';
import ProductToCartDTO from '../dao/dto/product-to-cart.dto.js';

export const httpAddProductToCart = async (req, res) => {
  try {
    const user = req.user;
    const product = new ProductToCartDTO(req.body);
    const updatedCart = await addProductToCart(user, product);
    res.json(updatedCart);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpRemoveProductFromCart = async (req, res) => {
  try {
    const user = req.user;
    const productId = req.body;  
    const updatedCart = await removeProductFromCart(user, productId);
    res.json(updatedCart);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpGetCartByUserId = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await getCartByUserId(userId);
    res.json(cart);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};
