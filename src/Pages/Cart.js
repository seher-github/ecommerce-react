import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import SmallHero from '../Components/SmallHero';
import p1 from '../Assets/p1.jpg'; 
import p2 from '../Assets/p2.jpg';

const Cart = () => {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 200,
      quantity: 1,
      img: p1,
    },
    {
      id: 2,
      name: 'Portable Speaker',
      price: 80,
      quantity: 2,
      img: p2,
    },
  ];

  // Calculate the subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <SmallHero currentPage="Cart" breadcrumb="cart" />
      
      <Container className="py-5">
        <Row>
          {/* Cart Items Section */}
          <Col md={8}>
            <h3 style={{ fontWeight: 'bold', color: 'blueviolet' }}>Your Cart</h3>
            {cartItems.map((item) => (
              <Card key={item.id} className="mb-4 p-3">
                <Row>
                  <Col xs={12} md={3}>
                    <img src={item.img} alt={item.name} className="img-fluid rounded" />
                  </Col>
                  <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
                    <h5>{item.name}</h5>
                    <p>Price: ${item.price}</p>
                  </Col>
                  <Col xs={12} md={3} className="d-flex flex-column justify-content-center align-items-end">
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      min="1"
                      style={{ width: '60px', textAlign: 'center', marginBottom: '10px' }}
                    />
                    <Button variant="danger" size="sm">Remove</Button>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>

          {/* Price Summary Section */}
          <Col md={4}>
            <h3 style={{ fontWeight: 'bold', color: 'blueviolet' }}>Order Summary</h3>
            <Card className="p-4">
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <Button
                style={{ backgroundColor: 'blueviolet', border: 'none' }}
                className="w-100 mt-3"
                href="/checkout"
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
