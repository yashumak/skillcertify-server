const Razorpay = require('razorpay');
require('dotenv').config();

console.log('Key ID:', process.env.RAZORPAY_KEY_ID);
console.log('Key Secret:', process.env.RAZORPAY_KEY_SECRET ? '***' : 'MISSING');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

razorpay.orders.create({amount: 100, currency: "INR"}, (err, order) => {
  if (err) {
    console.error('Order creation failed:', err);
  } else {
    console.log('Order created:', order);
  }
});




