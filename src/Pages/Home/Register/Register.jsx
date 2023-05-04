import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')

    const {createUser} = useContext(authContext);


const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value; 

    createUser(email, password)
    .then(result =>{
        const createdUser = result.user;
        setError('')
        event.target.reset();

    })
    .catch(error =>{
        console.log(error)
        setError(error.message)
    })
}

    return (
        <Container className='w-50 mx-auto'>
        <h3>Please Register</h3>
         <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Your Name" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Photo URL" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Accept Terms and Conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Register
  </Button>
  <br />
  <Form.Text className="text-secondary">Already Have an Account?
     <Link to={'/login/login'}>Login</Link>
    </Form.Text> <br />

  <Form.Text className="text-danger">
     {error}
    </Form.Text>
  <Form.Text className="text-muted">
     
    </Form.Text>
</Form>
        
    </Container>
    );
};

export default Register;