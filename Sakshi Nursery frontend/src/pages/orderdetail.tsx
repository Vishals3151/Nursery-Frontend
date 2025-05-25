import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderDetailsPage() {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the order details from local storage
    const savedOrderDetails = JSON.parse(localStorage.getItem('orderDetails'));

    if (savedOrderDetails) {
      setOrderDetails(savedOrderDetails);
    } else {
      // Handle case where no order details are found
      alert("No order details found. Please place an order first.");
    }
  }, []);

  const handleCancelOrder = () => {
    // Remove the order details from local storage
    localStorage.removeItem('orderDetails');
    
    // Optionally, redirect the user to the booking page or home page after cancellation
    alert('Your order has been cancelled.');
    navigate('/'); // Redirect to the booking page
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      {orderDetails ? (
        <div className="max-w-2xl mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center">Order Details</h1>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Customer Information</h2>
            <p><strong>Name:</strong> {orderDetails.name} {orderDetails.surname}</p>
            <p><strong>Village:</strong> {orderDetails.village}</p>
            <p><strong>District:</strong> {orderDetails.district}</p>
            <p><strong>Mobile:</strong> {orderDetails.mobile}</p>

            <h2 className="mt-6 mb-4 text-2xl font-bold">Plant Information</h2>
            <p><strong>Plant Variety:</strong> {orderDetails.plantVariety}</p>
            <p><strong>Plant Type:</strong> {orderDetails.plantType}</p>
            <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
            <p><strong>Rate:</strong> ₹{orderDetails.rate}</p>

            <h2 className="mt-6 mb-4 text-2xl font-bold">Booking & Delivery Information</h2>
            <p><strong>Booking Date:</strong> {orderDetails.bookingDate}</p>
            <p><strong>Delivery Date:</strong> {orderDetails.deliveryDate}</p>

            <h2 className="mt-6 mb-4 text-2xl font-bold">Payment Information</h2>
            <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>

            {orderDetails.paymentMethod && orderDetails.paymentMethod !== 'cod' && (
              <>
                <h3 className="mt-4 text-xl">Payment Status</h3>
                <p>Scan the QR code shown during booking to complete the payment.</p>
              </>
            )}

            {orderDetails.paymentMethod === 'cod' && (
              <>
                <h3 className="mt-4 text-xl">Cash on Delivery</h3>
                <p>Your payment will be collected at the time of delivery.</p>
              </>
            )}

            {/* UTR Number if available */}
            {orderDetails.utrNumber && (
              <div className="mt-4">
                <p><strong>UTR Number:</strong> {orderDetails.utrNumber}</p>
              </div>
            )}

            {/* Cancel Order Button */}
            <div className="mt-6 text-center">
              <button onClick={handleCancelOrder} className="px-6 py-2 btn btn-danger">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-lg text-center text-gray-500">Loading your order details...</p>
      )}
    </div>
  );
}
