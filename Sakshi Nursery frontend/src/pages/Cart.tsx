// src/pages/Cart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
// import Booking from './Booking';

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();  // Initialize useNavigate

  const updateQuantity = (id: number, currentQuantity: number, delta: number) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  // Redirect to Booking page on button click
  const handleProceedToCheckout = () => {
    navigate('/booking');  // This will navigate to the booking page
  };

  if (state.items.length === 0) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Your Cart is Empty</h2>
          <p className="text-gray-600">Start shopping to add items to your cart!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-2xl font-bold">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-6">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center p-6 bg-white rounded-lg shadow-md">
            <img
              src={item.plant.image}
              alt={item.plant.name}
              className="object-cover w-24 h-24 rounded-md"
            />
            <div className="flex-grow ml-6">
              <h3 className="text-lg font-semibold">{item.plant.name}</h3>
              <p className="text-gray-600">₹{item.plant.price}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateQuantity(item.plant.id, item.quantity, -1)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <Minus size={20} />
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.plant.id, item.quantity, 1)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <Plus size={20} />
              </button>
              <button
                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.plant.id })}
                className="p-1 text-red-500 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
        <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-green-600">
              ₹{state.total.toFixed(2)}
            </span>
          </div>
          <button
            className="w-full py-3 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-700"
            onClick={handleProceedToCheckout}  // Use the function here
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
