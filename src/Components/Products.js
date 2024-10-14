import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaHeadphones } from 'react-icons/fa';
import p1 from '../Assets/p1.jpg';
import p2 from '../Assets/p2.jpg';
import p3 from '../Assets/p3.jpg';
import p4 from '../Assets/p4.jpg';
import p5 from '../Assets/p5.jpg';
import p6 from '../Assets/p6.jpg';
import p7 from '../Assets/p7.jpg';
import p8 from '../Assets/p8.jpg';

const Products = ({ filters = { category: 'All', priceRange: [0, 500] } }) => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Vans Sk8-Hi MTE Shoes',
      description: 'The Collection features designed to withstand the elements whilst still looking cool.',
      price: 125,
      category: 'Shoes',
      img: p1,
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: 200,
      category: 'Headphones',
      img: p2,
    },
    {
      id: 3,
      name: 'Portable Speaker',
      description: 'Bluetooth speaker with high-definition sound quality.',
      price: 80,
      category: 'Speakers',
      img: p3,
    },
    {
      id: 4,
      name: 'Noise-Cancelling Headphones',
      description: 'Noise-cancelling headphones for an immersive audio experience.',
      price: 300,
      category: 'Headphones',
      img: p4,
    },
    {
      id: 5,
      name: 'Sports Headphones',
      description: 'Wireless headphones designed for athletes.',
      price: 150,
      category: 'Headphones',
      img: p5,
    },
    {
      id: 6,
      name: 'Phone Stand',
      description: 'Adjustable phone stand for hands-free use.',
      price: 25,
      category: 'Accessories',
      img: p6,
    },
    {
      id: 7,
      name: 'Laptop Bag',
      description: 'Water-resistant laptop bag for 15-inch laptops.',
      price: 60,
      category: 'Accessories',
      img: p7,
    },
    {
      id: 8,
      name: 'Bluetooth Earbuds',
      description: 'Compact Bluetooth earbuds with great sound quality.',
      price: 50,
      category: 'Headphones',
      img: p8,
    },
  ];

  // Filter products based on selected category and price range
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = filters.category === 'All' || product.category === filters.category;
    const isPriceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    return isCategoryMatch && isPriceMatch;
  });

  return (
    <div className="products-section py-5">
      <Container>
      <div className="text-center mb-4">
        <div className="d-flex justify-content-center align-items-center">
          <FaHeadphones size={30} style={{ color: 'blueviolet' }} className="me-2" />
          <h6 style={{ color: 'blueviolet' }}>Wireless Headphone Shop</h6>
        </div>
      </div>

        {/* Main Heading */}
        <h2 className="text-center mb-5" style={{ fontWeight: '900', fontSize: '40px' }}>
          Explore Our Products
        </h2>

        {/* Product Cards */}
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
                <Card className="h-100">
                  <div className="position-relative">
                    <Card.Img variant="top" src={product.img} alt={product.name} className="product-img" />
                    <Badge
                      pill
                      className="position-absolute"
                      style={{ backgroundColor: 'blueviolet', top: '10px', right: '10px', fontSize: '14px' }}
                    >
                      Sale!
                    </Badge>
                    <div className="card-img-overlay d-flex justify-content-start">
                      <a href="#" className="card-link text-danger like">
                        <FaHeart />
                      </a>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 900 }}>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Style: VA33TXRJ5</Card.Subtitle>
                    <Card.Text>{product.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-success">${product.price}</h5>
                      <Button style={{ backgroundColor: 'blueviolet', border: 'none' }}>
                        <FaShoppingCart /> Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="text-center">
              <h5>No products found matching the selected filters.</h5>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
