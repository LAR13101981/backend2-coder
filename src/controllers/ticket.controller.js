import { completePurchase } from '../services/ticket.service.js';

export const httpCompletePurchase = async (req, res) => {
  try {
    const userId = req.user._id;
    const ticket = await completePurchase(userId);
    res.json(ticket);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};
