import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          {/* Left: Form */}
          <div className="col-md-6 contact-form">
            <h2 className="contact-heading">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary custom-btn">Send Message</button>
            </form>
          </div>

          {/* Right: Addresses */}
          <div className="col-md-6 contact-info">
            <h2 className="contact-heading">Our Address</h2>
            <ul className="list-unstyled address-list">
              <li><strong>Head Office:</strong> 123 Main Street, City, Country</li>
              <li><strong>Email:</strong> info@example.com</li>
              <li><strong>Phone:</strong> +123 456 789</li>
              <li><strong>Working Hours:</strong> Monday to Friday, 9AM - 6PM</li>
            </ul>

            <h3 className="follow-us">Follow Us</h3>
            <ul className="social-icons list-inline">
              <li className="list-inline-item"><a href="#"><FaFacebook size={30} /></a></li>
              <li className="list-inline-item"><a href="#"><FaTwitter size={30} /></a></li>
              <li className="list-inline-item"><a href="#"><FaInstagram size={30} /></a></li>
              <li className="list-inline-item"><a href="#"><FaLinkedin size={30} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
