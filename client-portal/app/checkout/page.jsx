"use client";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send data to a backend here.
    console.log("Order Submitted:", { ...formData, cartItems });

    // Clear cart after successful "order"
    dispatch(clearCart());

    // Redirect or show message
    alert("Order placed successfully!");
    router.push("/main"); // or redirect to thank-you page
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        {/* Cart Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="text-sm">
                  {item.title} × {item.quantity} = ${item.price * item.quantity}
                </li>
              ))}
              <li className="font-semibold mt-2">Total: ${total.toFixed(2)}</li>
            </ul>
          )}
        </div>

        {/* User Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Shipping Info</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            className="w-full border px-4 py-2 rounded"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
          <Link
            href="/Sauna"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
          >
            Add more Products
          </Link>
          <Link
            href="/cart"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Back to Cart
          </Link>
        </div>
      </form>
    </div>
  );
}
