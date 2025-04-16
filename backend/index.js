const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const crypto = require("crypto");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Generate Order ID
function generateOrderId() {
  const uniqueId = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHash("sha256");
  hash.update(uniqueId);
  return hash.digest("hex").substr(0, 12);
}

// Cashfree Headers
const headers = {
  accept: "application/json",
  "Content-Type": "application/json",
  "x-client-id": process.env.CLIENT_ID,
  "x-client-secret": process.env.SECRET_KEY,
  "x-api-version": "2022-09-01",
};

// Health check
app.get("/", (req, res) => {
  res.send("✅ Cashfree Server Running");
});

// Create Order
app.post("/payment", async (req, res) => {
  const { order_amount, customer_phone, customer_name, customer_email } = req.body;
  try {
    const orderId = generateOrderId();

    const data = {
      order_id: orderId,
      order_amount: order_amount,
      order_currency: "INR",
      customer_details: {
        customer_id: "customer_" + Date.now(),
        customer_phone,
        customer_name,
        customer_email,
      },
    };

    const response = await axios.post("https://api.cashfree.com/pg/orders", data, { headers });
    console.log("✅ Order Created:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("❌ Payment Creation Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Payment order creation failed" });
  }
});

// Verify Order
app.post("/verify", async (req, res) => {
  const { orderId } = req.body;
  try {
    const response = await axios.get(
      `https://api.cashfree.com/pg/orders/${orderId}`,
      { headers }
    );
    res.json({
      status: response.data.order_status,
      data: response.data
    });
  } catch (error) {
    console.error("❌ Verification Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to verify payment" });
  }
});

app.listen(3000, () => {
  console.log("Server Running");
}); 