import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  originalPrice: String,
  status: String,
  views: Number,
});

export default mongoose.model("Product", productSchema);
