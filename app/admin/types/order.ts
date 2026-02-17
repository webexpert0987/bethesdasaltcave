export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  amount: number;
  giftCardTitle: string;
  paymentStatus: "paid" | "pending" | "failed";
  createdAt: string;
}
