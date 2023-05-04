import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider';
import img from '../../../assets/Mursaline.jpg'
import ActiveLink from '../../Home/Active Link/ActiveLink';
import './NavigationBar.css'

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
          
          <div className='m-2 btn btn-primary tex'><ActiveLink  to={'/'}>Home</ActiveLink> </div>
           <div className='m-2 btn btn-primary tex'><ActiveLink to={'/login/blog'}>Blog</ActiveLink></div>
            
            
          </Nav>
          <Nav>
            {
              user && <img style={{"height" : "38px"}} src={img} alt="" />
            }
            
            
            { user ?
              <Button className='ms-4' onClick={handleLogOut} variant="primary">LogOut</Button>:
              <div>
                <Link to={"/login/login"}><Button   variant="primary">LogIn</Button></Link>
                <Link to={"/login/register"}><Button className='ms-4' variant="primary">Register</Button></Link>
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