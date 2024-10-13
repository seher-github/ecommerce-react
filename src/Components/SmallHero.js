import React from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SmallHero = ({ currentPage, breadcrumb }) => {
  return (
    <section className="small-hero">
      <div className="breadcrumb-container">
        <Link to="/">Home</Link> / <span>{breadcrumb}</span>
      </div>
      <div className="hero-content">
        <FaHeadphones size={30} style={{ color: '#8A2BE2' }} /> {/* Icon */}
        <h6>Wireless Headphone Shop</h6>
        <h1>{currentPage}</h1>
      </div>
    </section>
  );
}

export default SmallHero;
