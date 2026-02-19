export type Order = {
  _id: string;
  customerName: string;
  customerEmail: string;
  giftCardTitle: string;
  amount: number;
  paymentStatus: "paid" | "pending";
  createdAt: string;
  updatedAt: string;
};

/* FETCH ALL ORDERS */
export async function getOrders(): Promise<Order[]> {
  try {
    const res = await fetch("/api/orders", {
      cache: "no-store", // always fresh data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

/* FETCH SINGLE ORDER */
export async function getOrderById(
  id: string
): Promise<Order | null> {
  try {
    const res = await fetch(
      `/api/orders/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Order not found");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching order:", error);
    return null;
  }
}
