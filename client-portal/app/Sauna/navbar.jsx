"use client";
import Link from "next/link";
import { ShoppingCart, X, Minus, Plus, Trash2, XCircle } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  addToCart,
  removeFromCartById,
  decreaseQuantity,
  clearCart,
} from "../store/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartCount);
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="bg-blue-50 shadow-md py-4 px-6 flex justify-between items-center relative">
      <div>
        <h1 className="text-xl font-bold">
          <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
            J
          </span>
          <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
            B
          </span>{" "}
          e
          <span className="text-red-400 font-thin border-b-3 border-b-red-600">
            S
            <span className="text-black border-b-3 border-b-blue-800">hop</span>
          </span>
        </h1>
      </div>

      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link href="/main">Home</Link>
        </li>
        <li>
          <Link href="/suggestions">Suggestions</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            <ShoppingCart size={24} color="black" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </li>
      </ul>

      {showCart && (
        <div className="absolute top-16 right-6 w-120 bg-white border rounded-lg shadow-lg z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Cart</h2>
            <button onClick={() => setShowCart(false)}>
              <X size={20} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-3 max-h-60 overflow-y-auto mb-4">
                {cartItems.map((item, index) => (
                  <li key={index} className="border-b pb-2 text-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <strong>{item.title}</strong>
                        <p className="text-xs text-gray-600">
                          Price: ${item.price}
                        </p>
                        <p className="text-xs text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="flex  items-end gap-1">
                        <button
                          className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: item.id,
                                title: item.title,
                                price: item.price,
                              })
                            )
                          }
                        >
                          <Plus size={20} />
                        </button>
                        <button
                          className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          <Minus size={20} />
                        </button>
                        <button
                          className="text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                          onClick={() => dispatch(removeFromCartById(item.id))}
                        >
                          <XCircle size={20} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Total */}
              <div className="border-t pt-2 text-sm font-semibold flex justify-between">
                <span>Total:</span>
                <span>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
            </>
          )}

          <div className="mt-4 flex justify-between">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

            <Link
              href="/cart"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
              onClick={() => setShowCart(false)}
            >
              Go to Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
