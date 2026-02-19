import mongoose, { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    giftCardTitle: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = models.Order || model("Order", orderSchema);
export default Order;