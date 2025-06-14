import React, { useState } from "react"
import { Search, Eye, Package, Truck, CheckCircle } from "lucide-react"

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: "#12345",
      customer: "John Doe",
      email: "john@example.com",
      total: 149.99,
      status: "Pending",
      date: "2024-01-15",
      items: [{ name: "Wireless Headphones", quantity: 1, price: 149.99 }],
      address: "123 Main Street, New York",
      bookingDate: "2024-01-10",
      deliveryDate: "2024-01-20",
      paymentStatus: "Paid",
      productName: "Wireless Headphones",
      quantity: 1,
      price: 149.99,
      totalPrice: 149.99
    },
    {
      id: "#12346",
      customer: "Jane Smith",
      email: "jane@example.com",
      total: 89.99,
      status: "Shipped",
      date: "2024-01-14",
      items: [{ name: "Bluetooth Speaker", quantity: 1, price: 89.99 }],
      address: "456 Oak Avenue, Los Angeles",
      bookingDate: "2024-01-09",
      deliveryDate: "2024-01-18",
      paymentStatus: "AdvancePaid",
      productName: "Bluetooth Speaker",
      quantity: 1,
      price: 89.99,
      totalPrice: 89.99
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const filteredOrders = orders.filter(order =>
    [order.id, order.customer, order.email].some(field =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const getStatusColor = status => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Shipped":
        return "bg-purple-100 text-purple-800"
      case "Delivered":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = status => {
    switch (status) {
      case "Pending":
      case "Processing":
        return Package
      case "Shipped":
        return Truck
      case "Delivered":
        return CheckCircle
      default:
        return Package
    }
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const viewOrderDetails = order => {
    setSelectedOrder(order)
    setShowModal(true)
  }

  return (
    <div className="space-y-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
        <div className="text-sm text-gray-500 mt-2 sm:mt-0">
          Total Orders: {orders.length}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6">
        <div className="relative">
          <Search className="absolute text-gray-400 left-3 top-1/2 -translate-y-1/2" size={20} />
          <input
            type="text"
            placeholder="Search orders by ID, customer, or email..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Order Date</th>
              <th className="px-4 py-3">Customer Advance</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredOrders.map(order => {
              const StatusIcon = getStatusIcon(order.status)
              return (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-blue-600">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">₹{order.total}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                      <StatusIcon size={12} className="mr-1" />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <button onClick={() => viewOrderDetails(order)} className="p-2 text-blue-600 rounded-lg hover:bg-blue-50">
                        <Eye size={16} />
                      </button>
                      <select
                        value={order.status}
                        onChange={e => updateOrderStatus(order.id, e.target.value)}
                        className="text-xs border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl text-gray-400 hover:text-gray-600">&times;</button>
            </div>

            <div className="space-y-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="font-medium">Order ID</label><p>{selectedOrder.id}</p></div>
                <div><label className="font-medium">Order Date</label><p>{selectedOrder.date}</p></div>
                <div><label className="font-medium">Customer</label><p>{selectedOrder.customer}</p></div>
                <div><label className="font-medium">Email</label><p>{selectedOrder.email}</p></div>
              </div>

              <div>
                <label className="font-medium">Status</label>
                <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(selectedOrder.status)}`}>
                  {React.createElement(getStatusIcon(selectedOrder.status), { size: 14, className: "mr-1" })}
                  {selectedOrder.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="font-medium">Address</label><p>{selectedOrder.address}</p></div>
                <div><label className="font-medium">Booking Date</label><p>{new Date(selectedOrder.bookingDate).toLocaleDateString()}</p></div>
                <div><label className="font-medium">Delivery Date</label><p>{new Date(selectedOrder.deliveryDate).toLocaleDateString()}</p></div>
                <div><label className="font-medium">Payment Status</label><p>{selectedOrder.paymentStatus}</p></div>
                <div><label className="font-medium">Product</label><p>{selectedOrder.productName}</p></div>
                <div><label className="font-medium">Quantity</label><p>{selectedOrder.quantity}</p></div>
                <div><label className="font-medium">Price</label><p>₹{selectedOrder.price?.toFixed(2)}</p></div>
                <div><label className="font-medium">Total</label><p>₹{selectedOrder.totalPrice?.toFixed(2)}</p></div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderManagement
