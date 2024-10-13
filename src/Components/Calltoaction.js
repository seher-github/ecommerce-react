import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaHeadphones } from 'react-icons/fa';
import hd from '../Assets/headphone-bg1.png';

const Calltoaction = () => {
  return (
    <div className="cta-section py-5">
      <Container style={{ backgroundColor: '#f5f5f5', position: 'relative', border: 'none', borderRadius: '50px' }}>
        <Row className="align-items-center">
          {/* Left side - Text Section */}
          <Col md={6}>
            <div className="text-container" style={{ alignItems: 'flex-start',padding:'20px' }}>
              {/* Icon and Small Text */}
              <div className="d-flex align-items-center mb-3">
                <FaHeadphones size={30} style={{ color: 'blueviolet' }} className="me-2" />
                <h6 style={{ color: 'blueviolet', margin: 0 }}>Wireless Headphone Store</h6>
              </div>

              {/* Main Heading */}
              <h2 className="mb-2" style={{ color: 'black', textAlign: 'left', fontWeight: 900, fontSize: '40px' }}>
                Enhance Your Music Experience
              </h2>

              {/* Counter Boxes */}
              <Row className="mb-4">
                <Col xs={6} md={3}>
                  <div className="counter-box px-3 py-2" style={{ backgroundColor: 'white', borderRadius: '8px', color: 'blueviolet' }}>
                    <h4>50+</h4>
                    <p style={{ color: 'black' }}>Brands</p>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="counter-box px-3 py-2" style={{ backgroundColor: 'white', borderRadius: '8px', color: 'blueviolet' }}>
                    <h4>100+</h4>
                    <p style={{ color: 'black' }}>Products</p>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="counter-box px-3 py-2" style={{ backgroundColor: 'white', borderRadius: '8px', color: 'blueviolet' }}>
                    <h4>200+</h4>
                    <p style={{ color: 'black' }}>Customers</p>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="counter-box px-3 py-2" style={{ backgroundColor: 'white', borderRadius: '8px', color: 'blueviolet' }}>
                    <h4>4.8/5</h4>
                    <p style={{ color: 'black' }}>Rating</p>
                  </div>
                </Col>
              </Row>

              {/* Button */}
              <div className="text-start">
                <Button
                  style={{
                    backgroundColor: 'transparent',
                    color: 'blueviolet',
                    padding: '10px 30px',
                    border: '2px solid blueviolet',
                  }}
                >
                  Shop Now!
                </Button>
              </div>
            </div>
          </Col>

          {/* Right side - Image Section */}
          <Col md={6}>
            <div className="image-container" style={{ position: 'relative' }}>
              <img
                src={hd}
                alt="Headphones"
                className="img-fluid"
                height={'100%'}
                style={{
                  marginTop: '-150px', // Negative margin to lift the image
                  zIndex: 1, // Ensure it stays above the background
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calltoaction;
