# 🚀 Render Deployment Guide for SkillCertify Server

## Prerequisites
- [Render Account](https://render.com) (Free tier available)
- [MongoDB Atlas Account](https://mongodb.com/atlas) (Free tier available)
- Your code pushed to a Git repository (GitHub, GitLab, etc.)

## Step 1: Prepare Your Repository

### 1.1 Update Frontend API Configuration
Update your frontend API configuration to use the Render URL after deployment:

```javascript
// src/config/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-app-name.onrender.com';

export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: `${API_BASE_URL}/api/auth/signup`,
    LOGIN: `${API_BASE_URL}/api/auth/login`,
  },
};
```

### 1.2 Commit and Push Your Changes
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

## Step 2: Deploy to Render

### 2.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub/GitLab or email
3. Verify your email

### 2.2 Connect Your Repository
1. Click "New +" → "Web Service"
2. Connect your Git repository
3. Select the repository containing your server code

### 2.3 Configure the Service

**Basic Settings:**
- **Name**: `skillcertify-server` (or your preferred name)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main` (or your default branch)

**Build & Deploy:**
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: `Free` (for testing) or `Starter` (for production)

### 2.4 Set Environment Variables

Click "Environment" tab and add these variables:

| Key | Value | Description |
|-----|-------|-------------|
| `NODE_ENV` | `production` | Environment mode |
| `PORT` | `10000` | Render's default port |
| `MONGODB_URI` | `your_mongodb_atlas_connection_string` | MongoDB connection |
| `CORS_ORIGIN` | `https://your-frontend-domain.com` | Frontend domain for CORS |
| `RAZORPAY_KEY_ID` | `your_razorpay_key_id` | Razorpay API key |
| `RAZORPAY_KEY_SECRET` | `your_razorpay_secret` | Razorpay API secret |

### 2.5 Deploy
1. Click "Create Web Service"
2. Wait for build and deployment (5-10 minutes)
3. Your service will be available at: `https://your-app-name.onrender.com`

## Step 3: Update Frontend Configuration

### 3.1 Update Environment Variables
Create `.env` file in your frontend root:

```env
VITE_API_URL=https://your-app-name.onrender.com
```

### 3.2 Update CORS Origin
In Render dashboard, update `CORS_ORIGIN` to your frontend domain.

## Step 4: Test Your Deployment

### 4.1 Health Check
Visit: `https://your-app-name.onrender.com/`
Should show: `{"message":"SkillCertify Server is running!","environment":"production"}`

### 4.2 Test API Endpoints
```bash
# Test signup
curl -X POST https://your-app-name.onrender.com/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"123456"}'

# Test login
curl -X POST https://your-app-name.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"123456"}'
```

## Step 5: Monitor and Maintain

### 5.1 View Logs
- Go to your service in Render dashboard
- Click "Logs" tab
- Monitor for errors and performance

### 5.2 Auto-Deploy
- Render automatically redeploys when you push to your main branch
- You can disable this in settings if needed

### 5.3 Scaling (Optional)
- Free tier: Sleeps after 15 minutes of inactivity
- Starter plan: Always running, better performance
- Professional plan: Auto-scaling, custom domains

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check build logs in Render dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Environment Variables Not Working**
   - Double-check variable names (case-sensitive)
   - Redeploy after adding new variables
   - Verify variable values are correct

3. **CORS Errors**
   - Update `CORS_ORIGIN` in environment variables
   - Ensure frontend domain is correct
   - Check browser console for specific errors

4. **MongoDB Connection Issues**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist in MongoDB Atlas
   - Ensure database user has correct permissions

### Performance Tips:

1. **Use Starter Plan** for production (always running)
2. **Optimize MongoDB queries** for better performance
3. **Implement caching** for frequently accessed data
4. **Monitor memory usage** in Render dashboard

## Security Considerations

1. **Never commit sensitive data** to Git
2. **Use environment variables** for all secrets
3. **Enable HTTPS** (automatic with Render)
4. **Regular security updates** for dependencies
5. **Monitor access logs** for suspicious activity

## Cost Optimization

- **Free tier**: Good for development/testing
- **Starter plan**: $7/month for production
- **Professional plan**: $25/month for high-traffic apps
- **Auto-scaling**: Only pay for what you use

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [MongoDB Atlas Support](https://docs.atlas.mongodb.com)

---

**🎉 Congratulations! Your SkillCertify server is now deployed on Render!**

Next steps:
1. Test all API endpoints
2. Update frontend configuration
3. Deploy your frontend (Vercel, Netlify, etc.)
4. Monitor performance and logs
