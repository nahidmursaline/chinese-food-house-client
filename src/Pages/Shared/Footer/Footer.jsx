import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <Container className='p-5' style={{ backgroundColor: '#f2f2f2' }}>
        <Row>
          <Col md={4} sm={6}>
            <h4>About Us</h4>
            <p>We are a Chinese restaurant that specializes in authentic cuisine from various regions of China.</p>
          </Col>
          <Col md={4} sm={6}>
            <h4>Contact Us</h4>
            <p>123 Main St, Anytown, USA</p>
            <p>Phone: (555) 555-5555</p>
            <p>Email: info@chineserestaurant.com</p>
          </Col>
          <Col md={4} sm={12}>
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a><FaFacebook /></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a><FaTwitch /></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a><FaInstagram /></li>
              <li><a href="#"><i className="fa fa-youtube"></i></a><FaYoutube /></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="text-center">Copyright © 2023 Chinese Restaurant.
              <br />All rights reserved.</p>
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default Footer;