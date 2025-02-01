import { Router } from "express";
import passport from "passport";
import { httpGetCurrentUser } from "../controllers/user.controller.js";

const authRouter = Router();

authRouter.get("/current", passport.authenticate("jwt", { session: false}), httpGetCurrentUser);
authRouter.post("/logout", (req, res) => {
    res.clearCookie("authCookie");
    res.redirect("/api/users/login"); 
});

export default authRouter;