import { NextResponse } from "next/server";
import { connectDB } from "@/app/admin/lib/mongodb";
import GiftCard from "../../../admin/models/GiftCard"

// ---------------- CREATE ----------------
export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json(); // { name, price, description, image, category }
    const newCard = await GiftCard.create(data);
    return NextResponse.json({ success: true, giftCard: newCard });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to create gift card" }, { status: 500 });
  }
}

// ---------------- READ (All gift cards) ----------------
// ---------------- READ ----------------
export async function GET(req: Request) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (id) {
      // Fetch single gift card
      const giftCard = await GiftCard.findById(id);
      if (!giftCard) {
        return NextResponse.json(
          { success: false, error: "Gift card not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, giftCard });
    }

    // If no id, return all
    const giftCards = await GiftCard.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, giftCards });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch gift cards" },
      { status: 500 }
    );
  }
}


// ---------------- UPDATE ----------------
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, ...updateData } = await req.json();
    const updatedCard = await GiftCard.findByIdAndUpdate(id, updateData, { new: true });
    return NextResponse.json({ success: true, giftCard: updatedCard });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to update gift card" }, { status: 500 });
  }
}

// ---------------- DELETE ----------------
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID missing" }, { status: 400 });

    await GiftCard.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to delete gift card" }, { status: 500 });
  }
}
