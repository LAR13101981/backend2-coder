import UserModel from "../models/user.schema.js";
import { createHash, isValidPassword } from "../utils/bcrypt.js";
import { generateJwtToken } from "../utils/jwt.js";

export default class UserService {
    #userModel;

    constructor(){
        this.#userModel = UserModel;
    }    
    async registerNewUser(userData){
        const {first_name, last_name, email, age, password, role } = userData;
        try {

            if (!first_name || !last_name || !email || !age || !password){
                throw new Error("Faltan completar campos para el registro")
            }

            const newUser = await UserModel.create({
                ...userData,                
                password: createHash(password),
            }) 
            
            if (role) role = userData.role
            
            return newUser;
        } catch (error) {
            throw new Error(error.message)
        }        
    };

    async getUserByEmail(email) {
        return await UserModel.findOne({ email });
    }

    async getUserById(id) {
        return await UserModel.findById(id);
    }    

};