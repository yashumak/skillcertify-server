# SkillCertify Server

A Node.js server for the SkillCertify application with MongoDB and Razorpay integration.

## 🚨 Security Notice

**IMPORTANT**: This repository contains sensitive configuration files that should NOT be committed to Git. The `.gitignore` file has been configured to exclude:

- `config/production.js` (contains API keys)
- `test-razorpay.js` (test files)
- `.env` files
- `node_modules/`

## 🔧 Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Copy `config/config.template.js` to `config/production.js`
   - Fill in your actual API keys and configuration values
   - Set environment variables in your deployment platform

## 🌍 Environment Variables

Create a `.env` file (not committed to Git) with:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

## 🚀 Deployment

### Render Deployment
This project is configured for Render deployment with `render.yaml`.

1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm start
```

## 📁 Project Structure

```
server/
├── config/          # Configuration files
├── lib/             # Database connection
├── models/          # MongoDB models
├── routes/          # API routes
├── index.js         # Main server file
└── render.yaml      # Render deployment config
```

## 🔐 Security Best Practices

- ✅ Use environment variables for API keys
- ✅ Never commit `.env` files
- ✅ Use `.gitignore` to exclude sensitive files
- ✅ Rotate API keys regularly
- ✅ Use HTTPS in production

## 📝 API Documentation

- Authentication routes: `/auth/*`
- Order creation: `/create-order`
- MongoDB integration for user management
- Razorpay payment processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

[Add your license here]
