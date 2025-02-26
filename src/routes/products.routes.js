import { Router } from 'express';
import passport from 'passport';
import { authByRole } from '../middlewares/access-by-role.js';
import {
  httpCreateNewProduct,
  httpDeleteProduct,
  httpGetAllProducts,
  httpGetProductById,
  httpUpdateProduct,
} from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.get('/', httpGetAllProducts);
productRouter.get('/:id', httpGetProductById);
productRouter.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  authByRole(['user'])
);
productRouter.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  authByRole(['admin']),
  httpCreateNewProduct
);
productRouter.put(
  '/update/:id',
  passport.authenticate('jwt', { session: false }),
  authByRole(['admin']),
  httpUpdateProduct
);
productRouter.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  authByRole(['admin']),
  httpDeleteProduct
);

export default productRouter;
