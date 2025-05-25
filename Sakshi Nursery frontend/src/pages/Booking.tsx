import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

export default function Booking() {
  // Form state to handle customer and order information
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    village: '',
    district: '',
    mobile: '',
    plantVariety: '',
    quantity: 1,
    plantType: '',
    rate: 0,
    bookingDate: '',
    deliveryDate: '',
    paymentMethod: '',
    utrNumber: ''
  });

  // State to hold the QR code image URL
  const [qrImage, setQrImage] = useState('');
  const [timerExpired, setTimerExpired] = useState(false);
  const [startTime, setStartTime] = useState(null);

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    const method = e.target.value;
    setFormData({ ...formData, paymentMethod: method });

    if (method) {
      setQrImage(getQRCodeImage(method)); // Set QR code image based on selected method
      setStartTime(Date.now()); // Set the start time when the payment method is selected
    }
  };

  // Function to get QR code image based on payment method
  const getQRCodeImage = (method) => {
    let qrImagePath = '';
    if (method === 'paypal') {
      qrImagePath = 'src/assets/QR.jpg'; // Path to PayPal QR image
    } else if (method === 'creditCard') {
      qrImagePath = 'src/assets/QR.jpg'; // Path to Credit Card QR image
    } else if (method === 'debitCard') {
      qrImagePath = 'src/assets/QR.jpg'; // Path to Debit Card QR image
    } else if (method === 'cod') {
      qrImagePath = 'src/assets/QR.jpg'; // Path to Cash on Delivery QR image
    }

    return qrImagePath; // Return the image path
  };

  // Check if the timer has expired
  useEffect(() => {
    if (startTime) {
      const timer = setInterval(() => {
        if (Date.now() - startTime > 60000) { // 5 minutes in milliseconds
          setTimerExpired(true);
          clearInterval(timer); // Stop the timer
        }
      }, 1000); // Check every second
      return () => clearInterval(timer);
    }
  }, [startTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show alert on successful booking
    alert('Booking Successful');
    setFormData({
      name: '',
      surname: '',
      village: '',
      district: '',
      mobile: '',
      plantVariety: '',
      quantity: 1,
      plantType: '',
      rate: 0,
      bookingDate: '',
      deliveryDate: '',
      paymentMethod: '',
      utrNumber: ''
    });
    localStorage.setItem('orderDetails', JSON.stringify(formData));

    // Navigate to the order confirmation page
    // navigate('/order');
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Book Your Plant Order</h1>
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
          {/* Customer Information */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Surname</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.surname}
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Village</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.village}
              onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">District</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.district}
              onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Mobile</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              required
            />
          </div>

          {/* Plant Information */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Plant Variety</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.plantVariety}
              onChange={(e) => setFormData({ ...formData, plantVariety: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Quantity</label>
            <input
              type="numeber"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
              required
             
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Plant Type</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.plantType}
              onChange={(e) => setFormData({ ...formData, plantType: e.target.value })}
              required
            />
          </div>

          {/* <div className="mb-4">
            <label className="block mb-2 text-gray-700">Rate</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.rate}
              onChange={(e) => setFormData({ ...formData, rate: Number(e.target.value) })}
              required
              min="0"
            />
          </div> */}

          {/* Date Information */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Booking Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.bookingDate}
              onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Delivery Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.deliveryDate}
              onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
              required
            />
          </div>

          {/* Payment Method Selection */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Payment Method</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              value={formData.paymentMethod}
              onChange={handlePaymentMethodChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">QR Scan</option>
              {/* <option value="debitCard">Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option> */}
            </select>
          </div>

          {/* Display QR Code Image */}
          {formData.paymentMethod && !timerExpired && qrImage && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Scan QR Code to Pay</label>
              <img src={qrImage} alt="QR Code" className="w-64 h-64 mx-auto" />
              <p className="text-sm text-gray-500">This QR code will expire in 5 minutes.</p>
            </div>
          )}

          {/* Timer Expired Message */}
          {timerExpired && (
            <div className="mb-4 text-red-500">
              <p>The QR code has expired. Please try again.</p>
            </div>
          )}

          {/* UTR Number Input */}
          {timerExpired && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Enter UTR Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                value={formData.utrNumber}
                onChange={(e) => setFormData({ ...formData, utrNumber: e.target.value })}
                placeholder="Enter UTR Number"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Book Your Order
          </button>
        </form>
      </div>
    </div>
  );
}
