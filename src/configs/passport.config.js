import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import cookieExtractor from "../utils/cookie-extractor.js";
import UserService from "../services/user.service.js";
import { isValidPassword } from "../utils/bcrypt.js";
import dotenv from "dotenv";

dotenv.config();

const userService = new UserService();

const SECRET = process.env.JWT_SECRET;

const initializePassport = () => {

    passport.use(
    "login",
    new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
            try {
                const user = await userService.getUserByEmail(email);
                if (!user) return done(null, false, { message: "User not found" });

                const validPassword = isValidPassword(password, user.password);
                if (!validPassword) return done(null, false, { message: "Invalid password" });

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
    );

    passport.use(
    "jwt",
    new JWTStrategy(
        {
            jwtFromRequest : ExtractJwt.fromExtractors([cookieExtractor]),
            secretOrKey: SECRET,
        },
        async (payload, done) => {
            try {
                const userId = payload.user._id;
                const user = await userService.getUserById(userId);
                if (!user) return done(null, false);
                return done(null, user);
            } catch (error) {
                return done(error, false);
            }
        }
    )
    );
};


export default initializePassport;