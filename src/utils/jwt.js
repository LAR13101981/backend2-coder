import jwt from 'jsonwebtoken';
import env from '../configs/env.js';

const SECRET = env.JWT_SECRET;

export const generateJwtToken = (user) => {
  return jwt.sign({ user }, SECRET, { expiresIn: '1h' });
};

export const verifyJwtToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
};
