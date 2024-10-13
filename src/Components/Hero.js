import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Importing React Bootstrap components
import hd from '../Assets/headphone-bg.png'


const Hero = () => {
  return (
    <div className="hero-section">
      <Container fluid className="h-100"> {/* Full height container */}
        <Row className="h-100 align-items-center"> {/* Vertically centered row */}
          
          {/* Image Column */}
          <Col md={6} className="hero-image-container">
            <img
              src={hd} 
              alt="Hero"
              className="img-fluid hero-image" // img-fluid for responsive images
            />
          </Col>
          
          {/* Text Column */}
          <Col md={6} className="hero-text-container">
            <h1>Wireless Headphones Store</h1>
            <p>Starting at <b>$129</b>
            </p>
            <Button>Shop Now!</Button>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Hero;
