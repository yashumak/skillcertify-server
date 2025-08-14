import express from "express";
import Razorpay from "razorpay";

const router = express.Router();

router.post("/create-order", async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100, // Convert ₹ to paise
            currency: "INR",
            receipt: "order_rcptid_11",
        };

        const order = await razorpay.orders.create(options);
        res.status(200).json(order); // This should include order.id
    } catch (err) {
        console.error("Razorpay error:", err);
        res.status(500).json({ error: "Order creation failed", details: err.message || err });
    }
});

export default router;
