// Production configuration for Render deployment
export const productionConfig = {
  // MongoDB URI - Update this with your actual MongoDB Atlas connection string
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://Yashumak:3hSiEsFhuSXF0TWH@cluster0.v1bwtoa.mongodb.net/skillcertify?retryWrites=true&w=majority&appName=Cluster0",
  
  // CORS configuration for production
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*", // Update this with your frontend domain
  
  // Razorpay configuration
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || "rzp_live_AjWcsczFKa2AbV",
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || "lGlCyzpDfuxLVeExEwonkynA",
  
  // Server port
  PORT: process.env.PORT || 5000
};
