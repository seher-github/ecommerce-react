import React from 'react';
import Slider from 'react-slick';
import { FaHeadphones } from 'react-icons/fa';
import reviewer1 from '../Assets/reviewer1.jpg'; 
import reviewer2 from '../Assets/reviewer2.jpg';
import reviewer3 from '../Assets/reviewer3.jpg';
import reviewer4 from '../Assets/reviewer4.jpg';
import reviewer5 from '../Assets/reviewer5.jpg';

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    pauseOnHover: false,
  };

  // Dummy review data with images
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Amazing sound quality! These headphones exceeded my expectations.',
      img: reviewer1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Great product! Highly recommend for audiophiles.',
      img: reviewer2,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      text: 'Comfortable and durable. Perfect for long listening sessions.',
      img: reviewer3,
    },
    {
      id: 4,
      name: 'Anna White',
      text: 'Best purchase ever! Excellent value for money.',
      img: reviewer4,
    },
    {
      id: 5,
      name: 'Tom Clark',
      text: 'Good bass and clear sound. I love it!',
      img: reviewer5,
    },
  ];

  return (
    <div className="reviews-section py-5" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Small Heading with Icon */}
      <div className="text-center mb-4">
        <div className="d-flex justify-content-center align-items-center">
          <FaHeadphones size={30} style={{ color: 'blueviolet' }} className="me-2" />
          <h6 style={{ color: 'blueviolet' }}>Wireless Headphone Shop</h6>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-center mb-5" style={{ fontWeight: '900', fontSize: '40px' }}>
        Reviews by Trusted Customers
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-3">
            <div className="review-card p-4 text-center" style={{alignItems:'center', backgroundColor: '#f9f9f9', borderRadius: '20px' }}>
                <div className="d-flex justify-content-center mb-3">
              <img
                src={review.img}
                alt={review.name}
                className="mb-3"
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
              />
              </div>
              <h5 style={{color:'blueviolet', fontWeight:700}}>{review.name}</h5>
              <p>"{review.text}"</p><main></main>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
