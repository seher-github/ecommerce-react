import React from 'react'
import SmallHero from '../Components/SmallHero'
import ContactUs from '../Components/ContactUs'
import Subscription from '../Components/Subscription'

const Contact = () => {
  return (
    <>
       <SmallHero currentPage="Contact Us" breadcrumb="contact" />
       <ContactUs />
       <Subscription />
    </>
  )
}

export default Contact
