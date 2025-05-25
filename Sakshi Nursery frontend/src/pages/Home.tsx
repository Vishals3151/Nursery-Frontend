import React from 'react';
import { plants, customers } from '../data';
import ProductCard from '../components/ProductCard';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Home() {
 
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1500')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-bold">Welcome To Sakshi Hi-Tech Nursery</h1>
            <p className="mb-8 text-xl">Owner:Vijay Trambakrao Khaire</p>
            <a
              href="https://wa.me/+918080496332"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Available Plants */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center"> Available  Plants</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plants.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16">
  <div className="container px-4 mx-auto">
    <h2 className="mb-12 text-3xl font-bold text-center">Our Regular Customers</h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {customers.map((customer) => (
        <div key={customer.id} className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4 space-x-4">
            <img
              src={customer.image}
              alt={customer.name}
              className="object-cover w-16 h-16 rounded-full"
            />
            <h3 className="font-semibold">{customer.name}</h3>
          </div>
          {/* Customer Details */}
          <div className="mb-4 text-gray-600">
            <p><strong>Location:</strong> {customer.village}, {customer.city}</p>
            <p><strong>Plant Purchased:</strong> {customer.purchasedPlant}</p>
            <p><strong>Quantity Purchased:</strong> {customer.quantity}</p>
            <p><strong>Mobile:</strong> {customer.mobile}</p>
          </div>
          {/* Customer Testimonial */}
          <p className="text-gray-600">{customer.testimonial}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Infrastructure & Services */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Our Facilities</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">Modern Greenhouse</h3>
              <p className="text-gray-600">State-of-the-art facilities for optimal plant growth</p>
            </div>
            <div className="text-center">
              <Clock size={48} className="mx-auto mb-4 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">Expert Care</h3>
              <p className="text-gray-600">Professional plant care and maintenance services</p>
            </div>
            <div className="text-center">
              <Phone size={48} className="mx-auto mb-4 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">Always available for your plant care needs</p>
            </div>
          </div>
        </div>
      </section>

     {/* Call Button (Floating with Animation) */}
     <section className="relative py-16 bg-gray-50">
       
        
        {/* Floating Call Button */}
        <a
          href="tel:+918080496332"
          className="fixed z-50 p-4 text-white transition duration-300 ease-in-out transform bg-green-600 rounded-full shadow-lg bottom-8 right-8 hover:bg-green-700 hover:scale-110 hover:rotate-12"
        >
          <Phone size={32} />
        </a>
      </section>
    </div>
  );
}
