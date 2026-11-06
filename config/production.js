// Production configuration for Render deployment
export const productionConfig = {
  // MongoDB URI - Use environment variable
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/skillcertify",
  
  // CORS configuration for production
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
  
  // Razorpay configuration - Use environment variables
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || "",
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || "",
  
  // Server port
  PORT: process.env.PORT || 5000
};


