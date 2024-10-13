import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShippingFast, FaLock, FaUndo, FaHeadset } from 'react-icons/fa';

const Services = () => {
  return (
    <Container className="py-5 services">
      <Row className="text-center">
        <Col xs={12} md={6} lg={3} className="d-flex align-items-center mb-4 col">
          <FaShippingFast size={60} className="me-3" style={{color:'blueviolet'}}/>
          <div className="cr">
            <h5>Free Shipping</h5>
            <p>Get free shipping on all orders over $50.</p>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className="d-flex align-items-center mb-4 col">
          <FaLock size={60} className="me-3" style={{color:'blueviolet'}} />
          <div className="cr">
            <h5>Secure Payment</h5>
            <p>100% secure payments with encryption.</p>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className="d-flex align-items-center mb-4 col">
          <FaUndo size={60} className="me-3" style={{color:'blueviolet'}} />
          <div className="cr">
            <h5>100% Money Back</h5>
            <p>Guaranteed money-back within 30 days.</p>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className="d-flex align-items-center mb-4 col">
          <FaHeadset size={60} className="me-3" style={{color:'blueviolet'}} />
          <div className="cr">
            <h5>Online Support</h5>
            <p>24/7 customer support available online.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
