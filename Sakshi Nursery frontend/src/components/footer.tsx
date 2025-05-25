// src/components/Footer.tsx

import React from 'react';
import { Facebook, Twitter, Instagram,  } from 'lucide-react'; // You can add more icons as needed

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Contact Info */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Contact Us</h3>
            <p className="mb-2 text-gray-400">Sakshi Hi-Tech Nursery</p>
            <p className="mb-2 text-gray-400">Phone: +91 8080 496332</p>
            <p className="mb-2 text-gray-400">Email: info@sakshihitech.com</p>
            <p className="text-gray-400">Address: 123 Plant Street, City Name, State, Country</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-green-500">Home</a></li>
              <li><a href="/about" className="hover:text-green-500">About Us</a></li>
              <li><a href="/products" className="hover:text-green-500">Plants</a></li>
              <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
              <li><a href="/faq" className="hover:text-green-500">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
               
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Sakshi Hi-Tech Nursery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
