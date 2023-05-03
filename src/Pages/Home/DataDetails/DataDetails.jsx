import React from 'react';


import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const DataDetails = () => {
    const details = useLoaderData();
    const {name,picture} = details;
    
    console.log(details)
    

   
    return (
        <div>
            <h1>this is details</h1>
            
            
            <Card className='margin'>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            
            
          </Card.Text>
          
        </Card.Body>
      </Card>
        </div>
    );
};

export default DataDetails;