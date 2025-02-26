import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  password: String,
  cartId: {
    type: Schema.Types.ObjectId,
    ref: 'carts',
  },
  role: {
    type: String,
    default: 'user',
  },
});

export default model('User', userSchema);
