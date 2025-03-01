import ShowUserDTO from '../dao/dto/show-user-info.dto.js';
import {
  getAllUsers,
  getUserByEmail,
  registerNewUser,
} from '../services/user.service.js';
import { generateJwtToken } from '../utils/jwt.js';

export const httpGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpGetUser = async (req, res) => {
  try {
    const user = await getUserByEmail(req.body);
    res.json(user);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpRegisterNewUser = async (req, res) => {
  try {
    await registerNewUser(req.body);

    res.json({ message: 'User created' });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpUserLogin = async (req, res) => {
  try {
    const { password, ...userData } = req.user.toObject();
    const userToken = generateJwtToken(userData);

    res.cookie('authCookie', userToken, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      signed: true,
    });
    res.status(200).json({ message: 'Login succesful' });
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};

export const httpGetCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized. No user found.' });
    }
    const { password, ...userData } = req.user.toObject();

    const showUser = new ShowUserDTO(userData);

    res.status(200).json({ user: showUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
