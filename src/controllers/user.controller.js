import UserService from "../services/user.service.js";
import { generateJwtToken } from "../utils/jwt.js";

const userInstance = new UserService();

export const httpRegisterNewUser = async (req, res)=> {
    try {
        const newUser = await userInstance.registerNewUser(req.body);        
       
        res.redirect('/api/users/login');
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message });
    }
};

export const httpUserLogin = async(req, res)=> {
    try {
        const { password, ...userData} = req.user.toObject();
        const userToken = generateJwtToken(userData);
        
        res
            .cookie("authCookie", userToken, 
                        {
                            maxAge: 60 * 60 * 1000,
                            httpOnly: true,
                            signed: true
                        })
            .redirect("/api/sessions/current");
       
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message });
    }
}

export const httpGetCurrentUser= async (req, res)=>{
    try {
        const user = req.user ? JSON.parse(JSON.stringify(req.user)) : null;
        res.render("current", { 
            title: "Detalle del Usuario",
            styles: `<link rel="stylesheet" href="/api/public/css/style.css">`,
            user
            
        });
    } catch (error) {
        res.status(500).send(`<h1>Error</h1><h3>${error.message}</h3>`);
    }
};