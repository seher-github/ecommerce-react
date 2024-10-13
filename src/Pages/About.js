import React from 'react'
import SmallHero from '../Components/SmallHero'
import Services from '../Components/Services'
import AboutUs from '../Components/AboutUs'
import Calltoaction from '../Components/Calltoaction'

const About = () => {
  return (
    <>
      <SmallHero currentPage="About Us" breadcrumb="About Us" />
      <Services />
      <AboutUs />
      <Calltoaction />
    </>
  )
}

export default About
