export interface OrderType {
  _id?: string;
  customerName: string;
  customerEmail: string;
  giftCardTitle: string;
  amount: number;
  paymentStatus: "pending" | "paid" | "failed";
  createdAt?: string;
  updatedAt?: string;
}
export interface Order {
  _id: string;
  amount: number;
  paymentStatus: string;
  customerEmail: string;
  customerName: string;
  createdAt: string;
  giftCardTitle: string;
}