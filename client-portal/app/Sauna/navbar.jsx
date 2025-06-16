"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-50 shadow-md py-4 px-6 flex justify-between items-center">
      <div>
        <h1 className={`text-xl font-bold `}>
          <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
            J
          </span>
          <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
            B
          </span>{" "}
          e
          <span
            className={`text-red-400 font-thin border-b-3 border-b-red-600 `}
          >
            S
            <span className={`text-black border-b-3 border-b-blue-800 `}>
              hop🛒
            </span>
          </span>
        </h1>
      </div>

      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link href="/main">
            <span className="hover:text-blue-500 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/suggestions">
            <span className="hover:text-blue-500 cursor-pointer">
              Suggestions
            </span>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <span className="hover:text-blue-500 cursor-pointer">Profile</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="hover:text-blue-500 cursor-pointer">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
