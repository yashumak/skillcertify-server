import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://Yashumak:3hSiEsFhuSXF0TWH@cluster0.v1bwtoa.mongodb.net/skillcertify?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) throw new Error("MongoDB URI not found");

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
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
