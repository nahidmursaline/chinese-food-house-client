import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider';
import img from '../../../assets/Mursaline.jpg'
import ActiveLink from '../../Home/Active Link/ActiveLink';

const NavigationBar = () => {
    const {user, logOut} = useContext(authContext);

    const handleLogOut = ()=> {
      logOut()
      .then()
      .catch(error => console.log(error));
    }
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Chinese Food House</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           <ActiveLink to={'/'}>Home</ActiveLink>
           <Link to={'/login/blog'}>Blog</Link>
            
            
          </Nav>
          <Nav>
            {
              user && <img style={{"height" : "38px"}} src={img} alt="" />
            }
            
            
            { user ?
              <Button onClick={handleLogOut} variant="secondary">LogOut</Button>:
              <div>
                <Link to={"/login/login"}><Button variant="secondary">LogIn</Button></Link>
                <Link to={"/login/register"}><Button variant="secondary">Register</Button></Link>
              </div>
                }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;