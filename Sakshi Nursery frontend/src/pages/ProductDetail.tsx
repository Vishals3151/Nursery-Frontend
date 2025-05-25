// src/pages/ProductDetail.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { plants } from '../data'; // Assuming you have a data file for plants

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const [plant, setPlant] = useState<any>(null);

  useEffect(() => {
    const foundPlant = plants.find(p => p.id === Number(id));
    setPlant(foundPlant);
  }, [id]);

  const handleAddToCart = () => {
    if (plant) {
      dispatch({ type: 'ADD_TO_CART', payload: plant });
    }
  };

  if (!plant) return <div>Loading...</div>;

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-bold">{plant.name}</h1>
          <p className="mb-4 text-2xl text-green-600">₹{plant.price}</p>
          <p className="mb-6 text-gray-600">{plant.description}</p>
          <div className="mb-6">
            <span className="text-gray-700">Category: </span>
            <span className="font-semibold">{plant.category}</span>
          </div>
          <div className="mb-6">
            <span className="text-gray-700">Stock: </span>
            <span className="font-semibold">{plant.stock} available</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="px-8 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
