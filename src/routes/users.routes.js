import { Router } from 'express';
import passport from 'passport';
import {
  httpRegisterNewUser,
  httpUserLogin,
  httpGetAllUsers,
  httpGetUser,
  httpGetCurrentUser,
} from '../controllers/user.controller.js';
import transformLoginData from '../middlewares/transform-login-data.js';

const userRouter = Router();

userRouter.get('/', httpGetAllUsers);
userRouter.get('/user', httpGetUser);
userRouter.get(
  '/current',
  transformLoginData,
  passport.authenticate('jwt', { session: false }),
  httpGetCurrentUser
);
userRouter.post('/register', httpRegisterNewUser);
userRouter.post(
  '/login',
  passport.authenticate('login', { session: false }),
  httpUserLogin
);

export default userRouter;
