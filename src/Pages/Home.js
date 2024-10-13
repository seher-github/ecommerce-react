import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Calltoaction from '../Components/Calltoaction'
import Products from '../Components/Products'
import Reviews from '../Components/Reviews'
import Subscription from '../Components/Subscription'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  return (
    <>
        <Hero />
      <Services />
      <Calltoaction />
      <Products />
      <Reviews />
      <Subscription />
      
    </>
  )
}

export default Home
