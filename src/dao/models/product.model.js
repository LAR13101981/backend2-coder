import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true, default: '' },
  price: { type: Number, required: true, min: 1 },
  stock: { type: Number, required: true, min: 0, default: 0 },
});

export default model('Product', productSchema);
