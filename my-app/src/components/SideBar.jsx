// Sidebar.js
import { useState } from "react";
import {
  Squares2X2Icon,
  CubeIcon,
  FolderIcon,
  TagIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Example from "./Navbar";
const navigation = [
  { name: "Dashnoard", href: "#", icon: Squares2X2Icon },
  { name: "Products", href: "#", icon: CubeIcon },
  { name: "Category", href: "#", icon: FolderIcon },
  { name: "Brands", href: "#", icon: TagIcon },
  { name: "Logout", href: "#", icon: ArrowRightStartOnRectangleIcon },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Example></Example>
      <div
        className={`fixed top-0 flex flex-col h-screen bg-gray-800 text-white ${
          collapsed ? "w-20" : "w-54"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h1
            className={`text-3xl font-bold border-b-1 border-b-blue-800 ${
              collapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-blue-400 font-serif ">J</span>inn
            <span className="text-blue-400 font-serif">B</span>yte
          </h1>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`text-gray-400 hover:text-white ${
              collapsed ? "fixed left-auto ml-2" : ""
            }`}
          >
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            )}
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
            >
              <item.icon
                className={`${collapsed ? "w-6 h-6" : "w-6 h-6 mr-3"}`}
              />
              {!collapsed && item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
