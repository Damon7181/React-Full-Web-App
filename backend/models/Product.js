const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  originalPrice: String,
  status: String,
  views: Number,
});

module.exports = mongoose.model("Product", productSchema);
