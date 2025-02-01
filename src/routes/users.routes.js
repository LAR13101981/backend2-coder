import { Router } from "express";
import { httpRegisterNewUser, httpUserLogin } from "../controllers/user.controller.js";
import passport from "passport";

const userRouter = Router();

userRouter.post("/register", httpRegisterNewUser );
userRouter.post("/login", passport.authenticate("login", { session: false}), httpUserLogin);



export default userRouter;