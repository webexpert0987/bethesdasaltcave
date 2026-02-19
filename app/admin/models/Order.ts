// app/lib/models/Order.ts
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerEmail: { type: String, required: true },
  customerName: { type: String, required: true },
  giftCardTitle: { type: String, required: true },
  amount: { type: Number, required: true },
  giftCardCode: { type: String, required: true, unique: true },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'refunded'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export { Order };
