import mongoose, { Schema, model, models } from "mongoose";

const giftCardSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, default: "" },
  active: { type: Boolean, default: true },
  category: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export const GiftCard =
  models.GiftCard || model("GiftCard", giftCardSchema);
export default GiftCard;