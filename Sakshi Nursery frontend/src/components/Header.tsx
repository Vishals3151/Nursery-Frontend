import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [selectedPage, setSelectedPage] = useState(''); // State to store the selected page
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  // Pages list
  const pages = [
    { name: 'Pages', path: '/' }, // Placeholder for default selection
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Our Delivery', path: '/delivery' },
    { name: 'Infrastructure', path: '/infra' },
    { name: 'My Order', path: '/order' },
  ];

  // Handle page selection and navigation
  const handlePageSelect = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      setSelectedPage(selectedPath); // Update the selected page
      window.location.href = selectedPath; // Redirect to the selected page
    }
  };

  return (
    <header className="text-white bg-green-600">
      <nav className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sprout size={32} />
            <span className="text-2xl font-bold">Welcome To Sakshi Hi-Tech Nursery</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/products" className="hover:text-green-200">Plants</Link>
            <Link to="/booking" className="hover:text-green-200">Book Now</Link>
            <Link to="/team" className="hover:text-green-200">Team</Link>
            
            {/* Dropdown for Pages */}
            <div className="relative">
              <select
                onChange={handlePageSelect}
                value={selectedPage}
                className="px-4 py-2 text-white bg-green-600 rounded focus:outline-none"
              >
                {pages.map((page) => (
                  <option key={page.name} value={page.path}>
                    {page.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Cart Icon with item count */}
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
