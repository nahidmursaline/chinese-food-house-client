import React from 'react';
import { Button, Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import img from '../../../assets/Mursaline.jpg'
import carousel1 from '../../../assets/carousel-1.jpg'
import carousel2 from '../../../assets/carousel-2.jpg'
import carousel3 from '../../../assets/carousel-3.jpg'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Chinese Food House</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><img style={{"height" : "38px"}} src={img} alt="" /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>


            <div>
            <Container>
            <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100  carousel-style"
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-style"
          src={carousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-style"
      src={carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Container>
            </div>
        </div>
    );
};

export default Header;