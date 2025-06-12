import React from "react"
import { Bell, Search, User, Menu } from "lucide-react"

const Header = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  return (
    <header className="px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg lg:hidden hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
          <div className="relative">
           
            <h6 className="text-2xl font-bold text-green-700">Sakshi Hi-tech Nursery</h6>

          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
              3
            </span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
              <User size={18} className="text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Admin User
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
