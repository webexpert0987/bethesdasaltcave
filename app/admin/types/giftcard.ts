export interface GiftCard {
  id: string;
  title: string;
  description: string;
  amount: number;
  createdAt: string;
  active?: boolean;   // optional, for admin
  image?: string;     // optional, for card images
  category?: string;  // optional, if you want
}