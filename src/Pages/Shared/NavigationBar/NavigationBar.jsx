import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider';
import img from '../../../assets/Mursaline.jpg'

const NavigationBar = () => {
    const {user} = useContext(authContext);
    return (
        <Container>
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
              <Link to={"/login/login"}><Button variant="secondary">LogIn</Button></Link>}
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;