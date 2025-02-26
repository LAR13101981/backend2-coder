import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  FIRMA_COOKIE: process.env.FIRMA_COOKIE,
  JWT_SECRET: process.env.JWT_SECRET,
};
