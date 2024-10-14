import React, { useState } from 'react';
import SmallHero from '../Components/SmallHero';
import Products from '../Components/Products';

const Shop = () => {
  // Define default filters (e.g., All categories, price range between 0 and 500)
  const [filters, setFilters] = useState({
    category: 'All',   // Filter by category (can be 'Shoes', 'Headphones', etc.)
    priceRange: [0, 500],  // Price range filter (min, max)
  });

  // Function to handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <SmallHero currentPage="Shop" breadcrumb="shop" />
      {/* You can add filter UI components here and pass handleFilterChange */}
      <Products filters={filters} /> {/* Pass filters to the Products component */}
    </>
  );
};

export default Shop;
