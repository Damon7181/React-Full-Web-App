"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
// import { useCart } from "../context/CartContext";
import { useSelector } from "react-redux";

export default function Navbar() {
  // const { cartCount } = useCart();
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <nav className="bg-blue-50 shadow-md py-4 px-6 flex justify-between items-center">
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
          <Link href="/cart">
            <div className="relative">
              <ShoppingCart size={24} color="black" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
