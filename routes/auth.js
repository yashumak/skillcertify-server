import express from "express";
import bcrypt from "bcryptjs";
import { connectDB } from "../lib/mongodb.js";
import User from "../models/User.js";

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await connectDB();
  } catch (err) {
    console.error("Database connection error:", err);
    return res.status(500).json({ error: "Database connection failed" });
  }

  try {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    const existingUser = await User.findOne({ email: trimmedEmail });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name: trimmedName,
      email: trimmedEmail,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  try {
    await connectDB();
  } catch (err) {
    console.error("Database connection error:", err);
    return res.status(500).json({ error: "Database connection failed" });
  }

  try {
    const trimmedEmail = email.trim().toLowerCase();
    
    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ 
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
