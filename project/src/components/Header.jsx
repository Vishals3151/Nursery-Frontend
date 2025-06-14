import React from "react";
import { Bell, User, Menu } from "lucide-react";

const Header = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  return (
    <header className="px-4 sm:px-6 py-4 bg-white border-b border-gray-200 z-20 relative">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Section: Hamburger + Brand */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg lg:hidden hover:bg-gray-100 transition"
          >
            <Menu size={20} />
          </button>

          {/* Logo or Brand */}
          <h1 className="text-xl sm:text-2xl font-bold text-green-700 whitespace-nowrap">
            Sakshi Hi-tech Nursery
          </h1>
        </div>

        {/* Right Section: Notifications + User */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Notification Bell */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
              3
            </span>
          </button>

          {/* User Info */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
              <User size={18} className="text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:inline">
              Admin User
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
