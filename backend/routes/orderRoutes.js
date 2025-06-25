const express = require("express");
const Order = require("../models/Order.js");

const router = express.Router();

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new order
router.post("/", async (req, res) => {
  const {
    customerName,
    customerEmail,
    deliveryAddress,
    products,
    totalAmount,
  } = req.body;

  // Basic validation
  if (
    !customerName ||
    !customerEmail ||
    !deliveryAddress ||
    !products ||
    !totalAmount
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newOrder = new Order({
    customerName,
    customerEmail,
    deliveryAddress,
    products,
    totalAmount,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
