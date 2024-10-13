import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../Assets/img.jpg'; // First image
import img2 from '../Assets/img1.jpg'; // Second image

const AboutUs = () => {
  return (
    <div>
      {/* First Section: Text on Left, Image on Right */}
      <section className="about-section">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="text-container">
              <h2 className="section-heading">Our Mission</h2>
              <p className="section-text">
                We are dedicated to providing the best wireless headphones, crafted with precision for an immersive audio experience. Our mission is to offer quality, durability, and the latest technology in all our products.
              </p>
            </Col>
            <Col md={6} className="image-container">
              <img src={img1} alt="Mission" className="img-fluid full-width-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Second Section: Image on Left, Text on Right */}
      <section className="about-section">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="image-container">
              <img src={img2} alt="Features" className="img-fluid full-width-image" />
            </Col>
            <Col md={6} className="text-container">
              <h2 className="section-heading">Why Choose Us</h2>
              <ul className="bullet-points">
                <li>High-quality sound with noise-cancellation technology</li>
                <li>Long-lasting battery life for all-day use</li>
                <li>Comfortable, lightweight, and ergonomic design</li>
                <li>Affordable pricing with top-tier features</li>
                <li>Wide variety of wireless headphones and accessories</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
