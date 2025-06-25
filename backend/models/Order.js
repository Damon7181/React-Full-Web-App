const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      id: String,
      title: String,
      price: Number,
      image: String,
      quantity: Number,
    },
  ],
  totalAmount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
