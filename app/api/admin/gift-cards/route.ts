import { NextResponse } from "next/server";
import { connectDB } from "@/app/admin/lib/mongodb";
import GiftCard from "@/app/admin/models/GiftCard";
import s3 from "@/app/admin/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
console.log("REGION:", process.env.AWS_REGION);
console.log("BUCKET:", process.env.AWS_BUCKET_NAME);

/* =======================================================
   GET - All or Single
======================================================= */
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const giftCard = await GiftCard.findById(id);
      return NextResponse.json({ success: true, giftCard });
    }

    const giftCards = await GiftCard.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, giftCards });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/* =======================================================
   POST - Add Gift Card (S3 Upload)
======================================================= */
export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("amount"));
    const imageFile = formData.get("image") as File | null;

    if (!name || !price) {
      return NextResponse.json(
        { success: false, error: "Title and price required" },
        { status: 400 }
      );
    }

    let imageUrl = "";

    if (imageFile) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const fileName = `gift-cards/${Date.now()}-${imageFile.name}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME!,
          Key: fileName,
          Body: buffer,
          ContentType: imageFile.type,
        })
      );

      imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    }

    const giftCard = await GiftCard.create({
      name,
      description,
      price,
      image: imageUrl,
    });

    return NextResponse.json({ success: true, giftCard });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/* =======================================================
   PUT - Update Gift Card (Optional Image Replace)
======================================================= */
export async function PUT(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const id = formData.get("id") as string;
    const name = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("amount"));
    const imageFile = formData.get("image") as File | null;

    const giftCard = await GiftCard.findById(id);

    if (!giftCard) {
      return NextResponse.json(
        { success: false, error: "Gift card not found" },
        { status: 404 }
      );
    }

    let imageUrl = giftCard.image;

    if (imageFile) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const fileName = `gift-cards/${Date.now()}-${imageFile.name}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_BUCKET_NAME!,
          Key: fileName,
          Body: buffer,
          ContentType: imageFile.type,
        })
      );

      imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    }

    giftCard.name = name || giftCard.name;
    giftCard.description = description || giftCard.description;
    giftCard.price = price || giftCard.price;
    giftCard.image = imageUrl;

    await giftCard.save();

    return NextResponse.json({ success: true, giftCard });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/* =======================================================
   DELETE
======================================================= */
export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await GiftCard.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}