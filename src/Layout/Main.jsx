import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
           
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;