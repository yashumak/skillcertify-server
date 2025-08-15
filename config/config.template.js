// Configuration template - Copy this file and rename to production.js, then fill in your actual values
// DO NOT commit the actual production.js file with real API keys

export const configTemplate = {
  // MongoDB URI - Replace with your actual MongoDB Atlas connection string
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority",
  
  // CORS configuration for production
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*", // Update this with your frontend domain
  
  // Razorpay configuration - Replace with your actual keys
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || "your_razorpay_key_id_here",
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || "your_razorpay_secret_key_here",
  
  // Server port
  PORT: process.env.PORT || 5000
};

// Usage:
// 1. Copy this file to config/production.js
// 2. Replace the placeholder values with your actual API keys
// 3. Set environment variables in your deployment platform
// 4. Never commit the actual production.js file with real keys
