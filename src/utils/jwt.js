import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.JWT_SECRET;

export const generateJwtToken = (user)=> {
    return jwt.sign({user}, SECRET, {expiresIn: "1h"});
};

export const verifyJwtToken = (token)=> {
    try {
        return jwt.verify(token, SECRET)
    } catch (error) {
        return null
    }
}