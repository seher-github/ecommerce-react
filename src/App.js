import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Checkout from './Pages/Checkout';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Header from './Components/Header'; // Assuming you have a Header component
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header component that contains navigation links */}
        <Header />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
