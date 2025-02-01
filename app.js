import express from "express";
import dotenv from "dotenv";
import { handlebarsConfig } from "./src/configs/handlebars.config.js";
import { connectDB } from "./src/configs/mongoose.config.js";
import userRouter from "./src/routes/users.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import { viewHomeRouter, viewRegisterRouter, viewLoginRouter } from "./src/routes/views.routes.js";
import cookieParser from "cookie-parser";
import initializePassport from "./src/configs/passport.config.js"
import passport from "passport";



dotenv.config();
const app = express();
const PORT = process.env.PORT;
const FIRMA = process.env.FIRMA_COOKIE;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api/public", express.static("./src/public"));
app.use(cookieParser(FIRMA));

handlebarsConfig(app);

app.use("/api/users", userRouter);
app.use("/api/sessions", authRouter)

app.use("/", viewHomeRouter);
app.use("/api/users", viewLoginRouter);
app.use("/api/users", viewRegisterRouter);

initializePassport();
app.use(passport.initialize());

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})