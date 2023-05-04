import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const authContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)

const [loading, setLoading] = useState(true)

const createUser = (email, password) =>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
}

const logOut = ()=> {
  setLoading(true)
  return signOut(auth)
}

useEffect(()=> {
const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
setUser(loggedUser);
setLoading(false);
})

return ()=> {
  unsubscribe()
}
},[])

  const authInfo = { 
    user,
    loading,
  createUser,
  signIn,
  logOut
  

  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
