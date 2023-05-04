import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogInLayout from '../Layout/LogInLayout';
import Main from '../Layout/Main';
import Blog from '../Pages/Home/Blog/Blog';
import DataDetails from '../Pages/Home/DataDetails/DataDetails';
import Home from '../Pages/Home/Home/Home';
import LogIn from '../Pages/Home/LogIn/LogIn';
import NotFound from '../Pages/Home/NotFound/NotFound';
import Register from '../Pages/Home/Register/Register';
import PrivateRoute from './PrivateRoute/privateRoute';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/data')
        },
        {
          path: '/*',
          element: <NotFound></NotFound>
        },
       
        {
          path: '/data/:id',
          element: <PrivateRoute><DataDetails></DataDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/data/${params.id}`)
        }
       
      ]
      
    },
    
      {
        path: '/login',
        element: <LogInLayout></LogInLayout>,
        children: [
          {
            path: '/login/login',
            element: <LogIn></LogIn>
          },
          {
            path: '/login/register',
            element:<Register></Register>
          },
          {
            path: '/login/blog',
            element: <Blog></Blog>
          }
         
        ]
      }
    
  ]);

  export default router;