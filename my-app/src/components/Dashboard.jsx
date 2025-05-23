import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";

// function Dashboard({ children }) {
function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Navbar />

        <main className="flex flex-1 flex-grow overflow-y-auto p-4">
          {/* {children} */}
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
