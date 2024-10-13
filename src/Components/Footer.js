import React from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="footer-section bg-blueviolet text-white">
      <Container fluid className="h-100 d-flex flex-column">
        <Row className="flex-grow-1 py-4">
          {/* Column 1: Logo, Subscription Form, Social Icons */}
          <Col md={4} className="d-flex flex-column align-items-center justify-content-between">
            {/* Logo */}
            <div className="text-center">
              <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>Headphone</h1>
              <p className="text-white-60" style={{padding:'20px 50px'}}>Your Audio Companion  Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Nam neque aut fugit rem? Qui quaerat vel fugiat cumque repellendus quod?
                Your Audio Companion  Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Nam neque aut fugit rem? Qui quaerat vel fugiat cumque repellendus quod?</p>
            </div>

            

            {/* Social Icons */}
            <div className="social-icons text-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaFacebook size={30} color="white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaTwitter size={30} color="white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaInstagram size={30} color="white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaLinkedin size={30} color="white" />
              </a>
            </div>
          </Col>

          {/* Column 2: Links and Address */}
          <Col md={4} className="text-center text-md-start">
            
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-white" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                About
              </Nav.Link>
              <Nav.Link href="#services" className="text-white" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                Services
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                Contact
              </Nav.Link>
            </Nav>

            {/* Address */}
            <h5 className="mt-4 text-white-50" style={{ fontWeight: 'bold' }}>Office Address</h5>
            <p className="mt-4 text-white-50">
              123 Audio St, Sound City, NY 56789
            </p>
            <h5 className="mt-4 text-white-50" style={{ fontWeight: 'bold' }}>Contact Number</h5>
            <p className="mt-4 text-white-50">
              0300-1234567
            </p>
          </Col>

          {/* Column 3: Important Links and Company Email */}
          <Col md={4} className="text-center text-md-start">
            
            <Nav className="flex-column">
              <Nav.Link href="#privacy" className="text-white" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                Privacy Policy
              </Nav.Link>
              <Nav.Link href="#terms" className="text-white" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                Terms of Service
              </Nav.Link>
              <Nav.Link href="#support" className="text-white" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                Support
              </Nav.Link>
            </Nav>

            {/* Company Email */}
            <h5 className="mt-4 text-white-50" style={{ fontWeight: 'bold' }}>Email Address</h5>
            <p className="mt-4 text-white-50">Email: info@example.com</p>
            <h5 className="mt-4 text-white-50" style={{ fontWeight: 'bold' }}>Contact Number</h5>
            <p className="mt-4 text-white-50">
              0300-1234567
            </p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center py-3">
            <p className="text-white-50">© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
