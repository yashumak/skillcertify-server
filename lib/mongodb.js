import mongoose from "mongoose";

// Use environment variable for MongoDB URI, fallback to hardcoded for now
// Note: You may need to update these credentials if they're incorrect
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://Yashumak:aPC8Zt8kHm3lCKrl@cluster0.v1bwtoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) throw new Error("MongoDB URI not found");

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB Atlas connected successfully to skillcertify database");
    global.mongoose = cached; // Ensures cache works in dev
    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    cached.promise = null;
    throw error;
  }
}
