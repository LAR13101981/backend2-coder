import { Router } from 'express';
import passport from 'passport';
import { authByRole } from '../middlewares/access-by-role.js';
import {
  httpAddProductToCart,
  httpRemoveProductFromCart,
} from '../controllers/cart.controller.js';

const cartRouter = Router();

cartRouter.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  authByRole(['user']),
  httpAddProductToCart
);
cartRouter.delete(
  '/remove',
  passport.authenticate('jwt', { session: false }),
  authByRole(['user']),
  httpRemoveProductFromCart
);

export default cartRouter;
