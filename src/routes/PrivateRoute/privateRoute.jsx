import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProvider';

const privateRoute = ({children}) => {
    const {user} = useContext(authContext)
    if(user) {
        return children;
    }
    return <Navigate to={'/login/login'}></Navigate>;
};

export default privateRoute;