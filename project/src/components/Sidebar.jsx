import React from "react"
import { NavLink } from "react-router-dom"

function Sidebar() {
  const linkClass =
    "block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition";

  return (
    <div className="fixed w-64 h-screen bg-white border-r shadow">
      <h2 className="p-4 text-xl font-bold text-gray-800 border-b">Admin Panel</h2>
      <nav className="flex flex-col gap-3 px-2 mt-4">
        <NavLink to="/" className={linkClass}>🏠 Dashboard</NavLink>
        <NavLink to="/products" className={linkClass}>🛍 Products</NavLink>
        <NavLink to="/orders" className={linkClass}>📦 Orders</NavLink>
        <NavLink to="/users" className={linkClass}>👤 Users</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar
