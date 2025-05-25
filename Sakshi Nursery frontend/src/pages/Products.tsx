import React, { useState } from 'react';
import { plants } from '../data';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...new Set(plants.map(plant => plant.category))];

  const filteredPlants = selectedCategory === 'All'
    ? plants
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <h1 className="mb-4 text-3xl font-bold md:mb-0">Our Plants</h1>
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-green-600" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlants.map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}