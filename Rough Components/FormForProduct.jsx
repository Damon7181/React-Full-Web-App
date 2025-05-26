import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="mx-auto mt-10 p-10 rounded-2xl shadow-md h-full xlg:w-3xl lg:w-3xl md:w-xl  bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            name="price"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Original Price
          </label>
          <input
            type="text"
            name="originalPrice"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.originalPrice}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Status
          </label>
          <input
            type="text"
            name="status"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.status}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Views
          </label>
          <input
            type="number"
            name="views"
            min="0"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.views}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
