import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogInLayout from '../Layout/LogInLayout';
import Main from '../Layout/Main';
import DataDetails from '../Pages/Home/DataDetails/DataDetails';
import Home from '../Pages/Home/Home/Home';
import LogIn from '../Pages/Home/LogIn/LogIn';
import Register from '../Pages/Home/Register/Register';


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
          path: '/data/:id',
          element: <DataDetails></DataDetails>,
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
          }
        ]
      }
    
  ]);

  export default router;