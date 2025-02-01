import { Router } from "express";
import { renderHomeView, renderRegisterView, renderLoginView} from "../controllers/views.controller.js";

const viewHomeRouter = Router();
const viewRegisterRouter = Router();
const viewLoginRouter = Router();
const viewCurrentRouter = Router();

viewHomeRouter.get("/", renderHomeView);

viewRegisterRouter.get("/register", renderRegisterView);

viewLoginRouter.get("/login", renderLoginView);

//viewCurrentRouter.get("/current", renderCurrentView);

export { viewHomeRouter, viewRegisterRouter, viewLoginRouter, viewCurrentRouter };