import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Booking from './pages/Booking';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Team from './pages/team';
import OrderDetailsPage from './pages/orderdetail';
import AboutUsPage from './pages/aboutus';
import FAQPage from './pages/faq';
import InfrastructurePage from './pages/infrastructure';
function App() {
  
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          
          
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/team" element={<Team />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<OrderDetailsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/infra" element={<InfrastructurePage />} />
            </Routes>
          </main>
          { <Footer />}
          
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;