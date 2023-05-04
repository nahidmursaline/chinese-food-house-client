import React from 'react';


import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const DataDetails = () => {
    const details = useLoaderData();
    const {name,picture, bio, recipes, likes, years_of_experience, num_recipes,} = details;
    
    console.log(details)
    

   
    return (
        <div>
            <h1 className='text-center mt-5'>Chef's details</h1>
            
            
          <Container className='m-5 mx-auto'>
          <Card className='margin'>
        <Card.Img className='mx-auto' style={{height: 600, width: 700}} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Bio: {bio}</p>
            <p>Likes: {likes}</p>
            <p>Years of Experience: {years_of_experience}</p>
            <p>Number of Recipies: {num_recipes}</p>
            <p></p>
            
          </Card.Text>
          
        </Card.Body>
      </Card>
          </Container>
        </div>
    );
};

export default DataDetails;