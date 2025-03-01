import { cartRepo } from '../repositories/index.js';
import { userRepo } from '../repositories/index.js';

const createCart = async (userId) => {
  try {
    const newCart = await cartRepo.createCart({ products: [] });

    return newCart._id;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addProductToCart = async (user, product) => {
  try {
    const userId = user._id;
    let newCartId;

    if (!user.cartId) {
      newCartId = await createCart(userId);
      await userRepo.updateUser(
        userId,
        { cartId: newCartId },
        {
          new: true,
          runValidators: true,
        }
      );
    } else {
      newCartId = user.cartId;
    }

    const cart = await cartRepo.getCartById(newCartId);

    if (cart.products?.length > 0) {
      const productIndex = cart.products.findIndex(
        (prod) => prod.productId.toString() === product.productId.toString()
      );

      if (productIndex !== -1) {
        if (product.quantity === undefined) {
          return {
            message: 'No cantidad provided, product remains unchanged',
            updatedCart: cart,
          };
        }
        if (product.quantity <= 0) {
          return {
            message: 'Invalid, cantidad must be greater than 0',
            updatedCart: cart,
          };
        }

        cart.products[productIndex].quantity = product.quantity;
        const updatedCart = await cartRepo.updateCart(newCartId, {
          products: cart.products,
        });

        return {
          message: 'Product already in the cart, quantity updated',
          updatedCart,
        };
      }
    }

    const updatedCart = await cartRepo.updateCart(newCartId, {
      $push: { products: product },
    });

    return { message: 'Product loaded', updatedCart };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeProductFromCart = async (user, productId) => {
  try {
    const cartId = user.cartId;
    const cart = await cartRepo.getCartById(cartId);

    if (!cart || !cart.products?.length) {
      return { message: 'Cart is empty or not found' };
    }

    const productIndex = cart.products.findIndex(
      (prod) => prod.productId.toString() === productId.id.toString()
    );

    if (productIndex < 0) {
      return { message: 'Product not found in cart' };
    }

    const updatedProducts = cart.products.filter(
      (_, index) => index !== productIndex
    );

    const updatedCart = await cartRepo.updateCart(cartId, {
      products: updatedProducts,
    });

    return { message: 'Product removed from cart', updatedCart };
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const getCartByUserId = async (userId) => {
  try {
    const user = await userRepo.getUserById(userId);
    if (!user.cartId) throw new Error('Cart not found');
    const cart = await cartRepo.getCartById(user.cartId);
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};
