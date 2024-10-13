import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaHeadphones } from 'react-icons/fa';
import subscriptionImage from '../Assets/headphone-bg.png'; // Replace with your actual image path

const Subscription = () => {
  return (
    <div className="subscription-section  py-5">
      <div className="container">
        <div className="row align-items-center subscription-row" >
          {/* Left Image */}
          <div className="col-lg-6 position-relative subscription-image-container">
            <img
              src={subscriptionImage}
              alt="Subscription"
              className="img-fluid"
              height={'100%'}
              style={{ position: 'relative', top: '-20px', left: '50px', zIndex: 1 }} // Slight upward shift
            />
          </div>

          {/* Right Text */}
          <div className="col-lg-6 subscription-text-container ">
            {/* Small Heading with Icon */}
            <div className="d-flex align-items-center mb-2">
              <FaHeadphones size={30} style={{ color: 'blueviolet' }} className="me-2" />
              <h6 style={{ color: 'blueviolet' }}>Wireless Headphone Store</h6>
            </div>

            {/* Main Heading */}
            <h2 className="mb-4" style={{ fontWeight: '900', fontSize: '36px' }}>
              Subscribe to our newsletter for updates
            </h2>

            {/* Description */}
            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.5' }}>
              Stay up to date with our latest products, special offers, and exclusive discounts!
            </p>

            {/* Subscription Form */}
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter your email" className="me-2" />
              <Button type="submit" style={{ backgroundColor: 'blueviolet', border: 'none' }}>
                Subscribe
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
