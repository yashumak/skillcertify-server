# SkillCertify Server

A Node.js server for the SkillCertify application with MongoDB and Razorpay integration.

## 🚨 Security Notice

**IMPORTANT**: This repository contains sensitive configuration files that should NOT be committed to Git. The `.gitignore` file has been configured to exclude:

- `config/production.js` (contains API keys)
- `test-razorpay.js` (test files)
- `.env` files
- `node_modules/`

## 🚀 Features

- **Course Management**: Comprehensive course catalog and management
- **Payment Integration**: Secure payment processing with Razorpay
- **User Authentication**: MongoDB-based user management system
- **API Endpoints**: RESTful API for frontend integration
- **CORS Support**: Cross-origin resource sharing configuration

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **Razorpay** - Payment gateway integration
- **CORS** - Cross-origin resource sharing

## 🔧 Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashumak/skillcertify-server.git
   cd skillcertify-server
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
2. Set environment variables in Render dashboard:
   - `MONGODB_URI`
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `CORS_ORIGIN`
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm start
```

### Development
```bash
npm run dev
```

## 📁 Project Structure

```
server/
├── config/          # Configuration files
│   ├── production.js        # Production config (not committed)
│   └── config.template.js   # Template for configuration
├── lib/             # Database connection
│   └── mongodb.js          # MongoDB connection setup
├── models/          # MongoDB models
│   └── User.js            # User model
├── routes/          # API routes
│   ├── auth.js            # Authentication routes
│   └── create-order.js    # Order creation routes
├── index.js         # Main server file
├── render.yaml      # Render deployment config
└── package.json     # Dependencies and scripts
```

## 🔐 Security Best Practices

- ✅ Use environment variables for API keys
- ✅ Never commit `.env` files
- ✅ Use `.gitignore` to exclude sensitive files
- ✅ Rotate API keys regularly
- ✅ Use HTTPS in production
- ✅ Validate all input data
- ✅ Implement proper CORS policies

## 📝 API Documentation

### Authentication Routes
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile

### Order Management
- `POST /create-order` - Create payment order
- `POST /verify-payment` - Verify payment signature

### Database Integration
- MongoDB Atlas connection
- User model with Mongoose
- Secure password handling

## 💳 Payment Integration

The server includes complete Razorpay payment integration:

### Features:
- **Secure Payment Processing**: All payments through Razorpay
- **Payment Verification**: Server-side signature verification
- **Order Management**: Automatic order creation and tracking
- **Customer Data**: Collects customer information during payment

### Payment Flow:
1. Frontend requests order creation
2. Server creates Razorpay order
3. User completes payment on frontend
4. Server verifies payment signature
5. Success confirmation sent to frontend

## 🔧 Configuration

### Razorpay Setup
1. Create account at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Complete KYC verification
3. Generate API keys in Settings → API Keys
4. Set environment variables with your keys

### MongoDB Setup
1. Create MongoDB Atlas cluster
2. Get connection string
3. Set `MONGODB_URI` environment variable

## 🚀 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (if configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the deployment documentation

## 📄 License

This project is licensed under the MIT License.

---

**Note**: Make sure to replace all placeholder values in environment variables with your actual credentials before running the application.
