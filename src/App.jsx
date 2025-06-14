import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ProductManagement from "./components/ProductManagement";
import OrderManagement from "./components/OrderManagement";
import UserManagement from "./components/UserManagement";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar sidebarCollapsed={sidebarCollapsed} />
        
        {/* Backdrop for small screens */}
        {!sidebarCollapsed && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
            onClick={() => setSidebarCollapsed(true)}
          />
        )}

        <div className="flex-1 lg:ml-64 transition-all duration-300">
          <Header
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductManagement />} />
              <Route path="/orders" element={<OrderManagement />} />
              <Route path="/users" element={<UserManagement />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
