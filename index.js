import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import createOrderRoute from "./routes/create-order.js";
import { connectDB } from "./lib/mongodb.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", createOrderRoute);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "SkillCertify Server is running!" });
});

// Start server with database connection
async function startServer() {
  try {
    // Connect to database first
    await connectDB();
    console.log("Database connected successfully");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}`);
      console.log(`Signup endpoint: http://localhost:${PORT}/api/auth/signup`);
      console.log(`Login endpoint: http://localhost:${PORT}/api/auth/login`);
      console.log(`Dashboard endpoint: http://localhost:${PORT}/api/create-order`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    console.log("Starting server without database connection...");
    console.log("Note: Authentication features will not work until database is connected");

    // Start the server anyway for development
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} (without database)`);
      console.log(`Health check: http://localhost:${PORT}`);
      console.log(`Signup endpoint: http://localhost:${PORT}/api/auth/signup (will fail)`);
      console.log(`Login endpoint: http://localhost:${PORT}/api/auth/login (will fail)`);
      console.log(`Dashboard endpoint: http://localhost:${PORT}/api/create-order`);
    });
  }
}

startServer();
