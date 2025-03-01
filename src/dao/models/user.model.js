import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  last_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  password: {
    type: String,
    required: true,
  },
  cartId: {
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  },
  role: {
    type: String,
    default: 'user',
  },
});

export default model('User', userSchema);
