import React, { useState } from "react";
import axios from "axios";

export default function FormForProduct() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    originalPrice: "",
    status: "",
    views: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "views" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/products",
        formData
      );
      alert("Product added successfully!");
      console.log("Saved Product:", res.data);
      // Optionally reset form
      setFormData({
        name: "",
        image: "",
        price: "",
        originalPrice: "",
        status: "",
        views: 0,
      });
    } catch (err) {
      console.error("Error saving product:", err);
      alert("Failed to save product.");
    }
  };

  return (
    <div className="mx-auto mt-10 p-10 rounded-2xl shadow-md bg-white max-w-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* All your input fields here — no change needed */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="originalPrice"
          value={formData.originalPrice}
          onChange={handleChange}
          placeholder="Original Price"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="Status"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          type="number"
          name="views"
          value={formData.views}
          onChange={handleChange}
          placeholder="Views"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          min="0"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
