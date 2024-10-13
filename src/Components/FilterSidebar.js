import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ category: e.target.value, priceRange });
  };

  const handlePriceChange = (e) => {
    const range = e.target.value.split(',').map(Number);
    setPriceRange(range);
    onFilterChange({ category: selectedCategory, priceRange: range });
  };

  return (
    <div className="filter-sidebar p-4 bg-light">
      <h5>Filter Products</h5>
      
      <div className="filter-group mb-3">
        <label>Category</label>
        <select onChange={handleCategoryChange} value={selectedCategory} className="form-control">
          <option value="All">All</option>
          <option value="Headphones">Headphones</option>
          <option value="Speakers">Speakers</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      
      <div className="filter-group mb-3">
        <label>Price Range</label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="1000"
          step="50"
          value={priceRange[1]}
          onChange={handlePriceChange}
        />
        <div>Up to ${priceRange[1]}</div>
      </div>
    </div>
  );
};

export default FilterSidebar;
