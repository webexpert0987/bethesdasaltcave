import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Production safety
if (!MONGODB_URI && process.env.NODE_ENV === "production") {
  throw new Error(
    "MONGODB_URI is required in production. Set it in Amplify environment variables."
  );
}

async function connectMongo() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI!);
}

export default connectMongo;

// Use local fallback only for development
const uri = MONGODB_URI || "mongodb://127.0.0.1:27017/giftcards";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Singleton cache for serverless
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
    cached.promise = mongoose.connect(uri, {
      dbName: "giftcards",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
