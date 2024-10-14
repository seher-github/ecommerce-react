import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SmallHero from '../Components/SmallHero';
import { FaCreditCard, FaPaypal } from 'react-icons/fa';

const Checkout = () => {
  return (
    <>
      <SmallHero currentPage="Checkout" breadcrumb="checkout" />

      <Container className="py-5">
        <Row>
          {/* Billing and Shipping Info */}
          <Col md={6} className="mb-4">
            <h3 style={{ fontWeight: 'bold', color: 'blueviolet' }}>Billing & Shipping Information</h3>
            <Card className="p-4">
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter your city" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="zipCode">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="text" placeholder="Enter your zip code" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>

          {/* Order Summary */}
          <Col md={6} className="mb-4">
            <h3 style={{ fontWeight: 'bold', color: 'blueviolet' }}>Order Summary</h3>
            <Card className="p-4">
              <div className="d-flex justify-content-between mb-3">
                <span>Product 1</span>
                <span>$125</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Product 2</span>
                <span>$200</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Product 3</span>
                <span>$80</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong>$405</strong>
              </div>
            </Card>
          </Col>

          {/* Payment Information */}
          <Col md={6}>
            <h3 style={{ fontWeight: 'bold', color: 'blueviolet' }}>Payment Information</h3>
            <Card className="p-4">
              <Form>
                <Form.Group controlId="paymentMethod" className="mb-3">
                  <Form.Label>Select Payment Method</Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Check
                      type="radio"
                      label="Credit Card"
                      name="paymentMethod"
                      className="me-3"
                    />
                    <FaCreditCard size={30} />
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Form.Check
                      type="radio"
                      label="PayPal"
                      name="paymentMethod"
                      className="me-3"
                    />
                    <FaPaypal size={30} />
                  </div>
                </Form.Group>

                <Button style={{ backgroundColor: 'blueviolet', border: 'none' }} className="mt-3 w-100">
                  Place Order
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
