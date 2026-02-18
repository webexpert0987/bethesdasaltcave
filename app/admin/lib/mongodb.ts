import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/giftcards"; // fallback for local dev

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

let cached = (global as any).mongoose as MongooseCache;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI not defined. Set it in .env.local or Amplify environment variables.");
    }

    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "giftcards",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
