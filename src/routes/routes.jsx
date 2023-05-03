import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import DataDetails from '../Pages/Home/DataDetails/DataDetails';
import Home from '../Pages/Home/Home/Home';


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
  ]);

  export default router;