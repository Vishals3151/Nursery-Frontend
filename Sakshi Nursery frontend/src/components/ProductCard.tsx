// src/components/ProductCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Plant } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  plant: Plant;
}

export default function ProductCard({ plant }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: plant });
  };

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img src={plant.image} alt={plant.name} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{plant.name}</h3>
        <p className="text-gray-600">₹{plant.price}</p>
        <div className="flex items-center justify-between mt-4">
          <Link
            to={`/product/${plant.id}`}
            className="text-green-600 hover:text-green-700"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
