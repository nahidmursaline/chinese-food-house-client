import React from 'react';
import { getAuth } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';


export const authContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
const user = {displayName: 'muri khan'}

    const authInfo = {user}
    return (
        <authContext.Provider value={authInfo}>
          {children}  
        </authContext.Provider >
    );
};

export default AuthProvider;