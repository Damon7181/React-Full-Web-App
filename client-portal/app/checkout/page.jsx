"use client";

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/orders", {
        products: cartItems,
        totalAmount: total,
      });
      console.log("Order saved:", response.data);
      alert("Order placed successfully!");
    } catch (err) {
      console.error("Failed to save order:", err);
      alert("Something went wrong while saving the order.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-xl font-bold">${total.toFixed(2)}</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleOrder}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 w-full sm:w-auto"
            >
              Confirm & Place Order
            </button>
            <Link
              href="/Sauna"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full sm:w-auto text-center"
            >
              Add More Products
            </Link>
            <Link
              href="/cart"
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded w-full sm:w-auto text-center"
            >
              Back to Cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
