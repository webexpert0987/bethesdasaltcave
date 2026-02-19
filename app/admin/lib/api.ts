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

export async function addGiftCard(formData: FormData): Promise<GiftCard> {
  try {
    const res = await fetch("/api/admin/gift-cards", {
      method: "POST",
      body: formData, // ❗ No headers
    });

    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to add gift card");

    return {
      id: data.giftCard._id,
      title: data.giftCard.name,
      description: data.giftCard.description,
      amount: data.giftCard.price,
      image: data.giftCard.image || "",
      active: data.giftCard.active ?? true,
      createdAt: data.giftCard.createdAt,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

/* -------------------------------------------------------
   UPDATE GIFT CARD
------------------------------------------------------- */
export async function updateGiftCard(
  id: string,
  formData: FormData
): Promise<GiftCard | null> {
  try {
    formData.append("id", id);

    const res = await fetch("/api/admin/gift-cards", {
      method: "PUT",
      body: formData,
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
   FETCH ALL ORDERS FROM DATABASE
------------------------------------------------------- */
export async function fetchOrders(): Promise<Order[]> {
  try {
    const res = await fetch("/api/orders", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    const orders = await res.json();
    
    // Transform MongoDB documents to Order type
    return orders.map((order: any) => ({
      _id: order._id,
      id: order._id,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      giftCardTitle: order.giftCardTitle,
      amount: order.amount,
      paymentStatus: order.paymentStatus,
      createdAt: order.createdAt,
    }));
  } catch (err) {
    console.error("Orders fetch error:", err);
    return [];
  }
}

/* FETCH SINGLE ORDER */
// export async function getOrderById(
//   id: string
// ): Promise<Order | null> {
//   await new Promise((r) => setTimeout(r, 400));
//   return orders.find((o) => o.id === id) || null;
// }
/* -------------------------------------------------------
   FETCH SINGLE CUSTOMER FROM DATABASE
------------------------------------------------------- */
export async function getCustomerById(
  id: string
): Promise<Customer | null> {
  const customers = await fetchCustomers();
  return customers.find((c: any) => c.email === id) || null;
}

// Fetch Customers
export async function fetchCustomers() {
  const res = await fetch("/api/customers", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }

  return res.json();
}
// Fetch Reports
export async function fetchReports() {
  const res = await fetch("/api/reports", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch reports");
  }

  return res.json();
}