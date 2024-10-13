import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { FaShoppingCart, FaBell, FaUser } from 'react-icons/fa';
import hd from '../Assets/headphones.png' ;
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* First Navbar: Logo and Icons */}
      <Navbar expand="lg" className="bg-transparent py-2" >
        <Container>
          <Navbar.Brand href="#home"><img
              src={hd} 
              alt="Logo"
              height="30px"
              width="30px"
              className="img-fluid" // img-fluid for responsive images
            />HeadPhones</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#cart">
              <FaShoppingCart /> {/* Cart Icon */}
            </Nav.Link>
            <Nav.Link href="#notifications">
              <FaBell /> {/* Notification Icon */}
            </Nav.Link>
            <Nav.Link href="#profile">
              <FaUser /> {/* Profile Icon */}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Second Navbar: Links and Search Bar */}
      <Navbar expand="lg" className="bg-white py-2 second-navbar" >
        <Container className="justify-content-between">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
          <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
