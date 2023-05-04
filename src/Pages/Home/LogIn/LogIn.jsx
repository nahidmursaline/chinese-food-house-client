import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../../Firebase/Firebase.config';
import { authContext } from '../../../Providers/AuthProvider';

const LogIn = () => {
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()


const handleGoogleSignin = ()=>{
  signInWithPopup(auth, googleProvider)
  .then(result => {
    const user = result.user;
  })
  .catch(error => {
    console.log('error', error.message);
  })
}


const {signIn} = useContext(authContext);

const navigate = useNavigate();

const handleLogin = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  signIn(email, password)
  .then(result => {
    const loggedUser = result.user;
    navigate('/')
  })
  .catch(error => {
    console.log(error)
  })

}

const handleGithubSignin = ()=> {
  signInWithPopup(auth, githubProvider)
  .then(result => {
    const logUser = result.user;
    
  })
  .catch(error => {
    console.log(error.message)
  })
}

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login</h3>
             <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Login
      </Button><br /><br />
      <Button onClick={handleGoogleSignin} variant="primary" type="submit">
      Google Login
      </Button><br /><br />
      <Button onClick={handleGithubSignin} variant="primary" type="submit">
      GitHub Login
      </Button>
      <br />
      <Form.Text className="text-secondary">Don't Have an Account?
         <Link to={'/login/register'}>Register</Link>
        </Form.Text>

      <Form.Text className="text-muted">
         
        </Form.Text>
      <Form.Text className="text-muted">
         
        </Form.Text>
    </Form>
            
        </Container>
    );
};

export default LogIn;