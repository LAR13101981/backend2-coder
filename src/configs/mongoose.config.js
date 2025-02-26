import env from './env.js';
import { connect, Types } from 'mongoose';

export const connectDB = async () => {
  const URL = env.MONGO_URL;

  try {
    await connect(URL);
    console.log('Succesfully connected to MongoDB Atlas');
  } catch (error) {
    console.log('Failed to connect to MongoDB', error.message);
  }
};

export const isValidID = (id) => {
  return Types.ObjectId.isValid(id);
};
