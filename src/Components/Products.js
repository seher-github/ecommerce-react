import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import p1 from '../Assets/p1.jpg';
import p2 from '../Assets/p2.jpg';
import p3 from '../Assets/p3.jpg';
import p4 from '../Assets/p4.jpg';
import p5 from '../Assets/p5.jpg';
import p6 from '../Assets/p6.jpg';
import p7 from '../Assets/p7.jpg';
import p8 from '../Assets/p8.jpg';

const Products = () => {
  // Filter states
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');

  // Product data
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') setCategory(value);
    if (name === 'priceRange') setPriceRange(value);
    if (name === 'brand') setBrand(value);
    if (name === 'rating') setRating(value);
  };

  // Filtered products based on selected filters
  const filteredProducts = products.filter((product) => {
    let priceMatch = true;
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-');
      priceMatch = product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice);
    }
    const categoryMatch = category ? product.category === category : true;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="products-section py-5">
      <Container>
        {/* Filter Options */}
        <Row className="mb-4">
          <Col xs={12}>
            <h4>Filters</h4>
            <Form className="d-flex flex-column align-items-start">
              {/* Category Filter */}
              <Form.Group controlId="categorySelect" className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select name="category" value={category} onChange={handleFilterChange}>
                  <option value="">All Categories</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Speakers">Speakers</option>
                  <option value="Accessories">Accessories</option>
                </Form.Select>
              </Form.Group>

              {/* Price Range Filter */}
              <Form.Group controlId="priceRangeSelect" className="mb-3">
                <Form.Label>Price Range</Form.Label>
                <Form.Select name="priceRange" value={priceRange} onChange={handleFilterChange}>
                  <option value="">All Prices</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-300">$200 - $300</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {/* Product Grid */}
        <Row>
          {filteredProducts.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={product.img} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <h5>${product.price}</h5>
                  <Button variant="primary">
                    <FaShoppingCart /> Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
