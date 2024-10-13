import React from 'react';
import SmallHero from '../Components/SmallHero';
import Products from '../Components/Products';

const Shop = () => {
  return (
    <>
      <SmallHero currentPage="Shop" breadcrumb="shop" />
      <Products /> {/* Products component with filters */}
    </>
  );
};

export default Shop;
