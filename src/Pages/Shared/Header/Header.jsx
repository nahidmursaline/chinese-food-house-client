import React from 'react';
import { Button, Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import img from '../../../assets/Mursaline.jpg'
import carousel1 from '../../../assets/carousel-1.jpg'
import carousel2 from '../../../assets/carousel-2.jpg'
import carousel3 from '../../../assets/carousel-3.jpg'
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../../Providers/AuthProvider';

const Header = () => {
  const {user} = useContext(authContext);
    return (
        <div>
            {/* <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Chinese Food House</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           <Link to={'/'}>Home</Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            
          </Nav>
          <Nav>
            {
              user && <img style={{"height" : "38px"}} src={img} alt="" />
            }
            
            <Button variant="secondary">{user.displayName}</Button>
            { user ?
              <Button variant="secondary">LogOut</Button>:
              <Link to={"/login"}><Button variant="secondary">LogIn</Button></Link>}
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div> */}


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
          <h3>Chinese Chicken</h3>
          <p>..........So much Delicious.........</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-style"
          src={carousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Chinese Burger</h3>
          <p>......Soo much Yummy.......</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-style"
      src={carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Chinese Strabery</h3>
          <p>
            .......Thats really very tasty.......
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