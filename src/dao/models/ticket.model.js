import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ticketSchema = new Schema({
  code: {
    type: String,
    unique: true,
    default: uuidv4,
  },
  purchase_datetime: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  purchaser: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
});

export default model('Ticket', ticketSchema);
