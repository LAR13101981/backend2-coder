import express from 'express';
import env from './src/configs/env.js';
import { connectDB } from './src/configs/mongoose.config.js';
import userRouter from './src/routes/users.routes.js';
import cookieParser from 'cookie-parser';
import initializePassport from './src/configs/passport.config.js';
import passport from 'passport';
import productRouter from './src/routes/products.routes.js';
import cartRouter from './src/routes/cart.routes.js';

const app = express();
const PORT = env.PORT;
const FIRMA = env.FIRMA_COOKIE;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/public', express.static('./src/public'));
app.use(cookieParser(FIRMA));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/users/cart', cartRouter);

initializePassport();
app.use(passport.initialize());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
