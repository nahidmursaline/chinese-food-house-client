import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProvider';

const privateRoute = ({children}) => {
    const {user, loading} = useContext(authContext)
    if(loading){
        return  <Spinner animation="border" variant="danger" />
    }
    if(user) {
        return children;
    }
    return <Navigate to={'/login/login'}></Navigate>;
};

export default privateRoute;