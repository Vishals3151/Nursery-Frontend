import React from "react"
import {
  TrendingUp,
  Package,
  ShoppingCart,
  Users,
  DollarSign
} from "lucide-react"

const Dashboard = () => {
  const stats = [
   
  {
      label: "Total Products",
      value: "1,247",
      change: "+5%",
      icon: Package,
      color: "text-blue-600"
    },
    {
      label: "Total Orders",
      value: "3,842",
      change: "+18%",
      icon: ShoppingCart,
      color: "text-purple-600"
    },
    {
      label: "Total Users",
      value: "892",
      change: "+8%",
      icon: Users,
      color: "text-orange-600"
    }
  ]

  const recentOrders = [
    {
      id: "992145",
      customer: "Dipak Khaire",
      amount: "₹2000",
      status: "Pending",
      date: "2024-01-15"
    },
    {
      id: "992146",
      customer: "Amol Khiare",
      amount: "₹1500",
      status: "Pending",
      date: "2024-01-14"
    },
    {
      id: "992147",
      customer: "Sumit Kale",
      amount: "₹1000",
      status: "Pending",
      date: "2024-01-14"
    },
    {
      id: "992186",
      customer: "Raj Kale",
      amount: "₹2500",
      status: "Pending",
      date: "2024-01-13"
    }
  ]

  const topProducts = [
    { name: "Aryaman", sales: 156, price: "₹1.50" },
    { name: "Armar", sales: 143, price: "₹1.50" },
    { name: "2048", sales: 98, price: "₹1.40" },
    { name: "Shark-1", sales: 87, price: "₹1.40" }
  ]

  const getStatusColor = status => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Shipped":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Processing":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="p-6 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                
                </div>
                <div className={`p-3 rounded-full bg-gray-100`}>
                  <Icon size={24} className={stat.color} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Comming Orders
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map(order => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{order.amount}</p>
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Top Selling Plants
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">
                      {product.sales} Total Customers
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
