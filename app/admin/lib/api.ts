// /lib/api.ts

import { GiftCard } from "../types/giftcard";
import { Order } from "../types/order";
import { Customer } from "../types/customer";

/* -------------------------------------------------------
   MOCK DATA (Temporary — replace with DB later)
------------------------------------------------------- */

let giftCards: GiftCard[] = [
  {
    id: "1",
    title: "$50 Gift Card",
    description: "Perfect for a single salt cave session.",
    amount: 50,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "$100 Gift Card",
    description: "Ideal for a full wellness experience.",
    amount: 100,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "$200 Gift Card",
    description: "Premium gift for complete relaxation.",
    amount: 200,
    active: false,
    createdAt: new Date().toISOString(),
  },
];

/* -------------------------------------------------------
   FETCH ALL GIFT CARDS
------------------------------------------------------- */
export async function fetchGiftCards(): Promise<GiftCard[]> {
  try {
    const res = await fetch("/api/admin/gift-cards");
    const data = await res.json();

    if (!data.success) throw new Error(data.error || "Failed to fetch gift cards");

    return data.giftCards.map((card: any) => ({
      id: card._id,
      title: card.name,
      description: card.description,
      amount: card.price,
      image: card.image || "",
      active: true, // optional if stored in DB
      createdAt: card.createdAt,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

/* -------------------------------------------------------
   ADD GIFT CARD
------------------------------------------------------- */
export async function addGiftCard(card: Partial<GiftCard>): Promise<GiftCard> {
  try {
    const res = await fetch("/api/admin/gift-cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
body: JSON.stringify({
  name: card.title,
  description: card.description,
  price: card.amount,
  image: card.image || "",
})
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to add gift card");

    return {
      id: data.giftCard._id,
      title: data.giftCard.name,
      description: data.giftCard.description,
      amount: data.giftCard.price,
      image: data.giftCard.image || "",
      active: true,
      createdAt: data.giftCard.createdAt,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}


/* -------------------------------------------------------
   DELETE GIFT CARD
------------------------------------------------------- */
export async function deleteGiftCard(id: string): Promise<void> {
  try {
    const res = await fetch(`/api/admin/gift-cards?id=${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to delete gift card");
  } catch (err) {
    console.error(err);
    throw err;
  }
}


/* -------------------------------------------------------
   GET SINGLE GIFT CARD
------------------------------------------------------- */
export async function getGiftCardById(id: string): Promise<GiftCard | null> {
  try {
    const res = await fetch(`/api/admin/gift-cards?id=${id}`);
    const data = await res.json();
    if (!data.success) return null;

    const card = data.giftCard;
    return {
      id: card._id,
      title: card.name,
      description: card.description,
      amount: card.price,
      image: card.image || "",
      active: true,
      createdAt: card.createdAt,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}


/* -------------------------------------------------------
   UPDATE GIFT CARD
------------------------------------------------------- */
export async function updateGiftCard(id: string, updatedData: Partial<GiftCard>): Promise<GiftCard | null> {
  try {
    const res = await fetch("/api/admin/gift-cards", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        name: updatedData.title,
        description: updatedData.description,
        price: updatedData.amount,
        image: updatedData.image,
      }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to update gift card");

    return {
      id: data.giftCard._id,
      title: data.giftCard.name,
      description: data.giftCard.description,
      amount: data.giftCard.price,
      image: data.giftCard.image || "",
      active: true,
      createdAt: data.giftCard.createdAt,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}


/* -------------------------------------------------------
   MOCK ORDERS DATA
------------------------------------------------------- */

let orders: Order[] = [
  {
    id: "ORD-1001",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    amount: 50,
    giftCardTitle: "$50 Gift Card",
    paymentStatus: "paid",
    createdAt: new Date().toISOString(),
  },
  {
    id: "ORD-1002",
    customerName: "Sarah Smith",
    customerEmail: "sarah@example.com",
    amount: 100,
    giftCardTitle: "$100 Gift Card",
    paymentStatus: "pending",
    createdAt: new Date().toISOString(),
  },
];

/* FETCH ALL ORDERS */
export async function fetchOrders(): Promise<Order[]> {
  await new Promise((r) => setTimeout(r, 500));
  return orders;
}

/* FETCH SINGLE ORDER */
export async function getOrderById(
  id: string
): Promise<Order | null> {
  await new Promise((r) => setTimeout(r, 400));
  return orders.find((o) => o.id === id) || null;
}
/* -------------------------------------------------------
   MOCK CUSTOMERS DATA
------------------------------------------------------- */

let customers: Customer[] = [
  {
    id: "CUST-001",
    name: "John Doe",
    email: "john@example.com",
    totalOrders: 2,
    totalSpent: 150,
    createdAt: new Date().toISOString(),
  },
  {
    id: "CUST-002",
    name: "Sarah Smith",
    email: "sarah@example.com",
    totalOrders: 1,
    totalSpent: 100,
    createdAt: new Date().toISOString(),
  },
];

/* FETCH ALL CUSTOMERS */
export async function fetchCustomers(): Promise<Customer[]> {
  await new Promise((r) => setTimeout(r, 500));
  return customers;
}

/* FETCH SINGLE CUSTOMER */
export async function getCustomerById(
  id: string
): Promise<Customer | null> {
  await new Promise((r) => setTimeout(r, 400));
  return customers.find((c) => c.id === id) || null;
}