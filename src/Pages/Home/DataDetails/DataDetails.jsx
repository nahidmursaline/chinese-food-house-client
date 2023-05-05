import React from 'react';
import { useState } from 'react';


import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const DataDetails = () => {
  const notify = () => toast("Add to Favourite!");
    const details = useLoaderData();
    const {name,picture, bio, recipes, likes, years_of_experience, num_recipes,} = details;
    
    console.log(details)

    const [disable, setDisable] = useState(false);

    const handleFavourite = ()=> {
        setDisable(true)
        notify()
    }

   
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
            <h6>Recipes Name: {recipes[0].name}</h6>
            <p>Recipes description: {recipes[0].description}</p>
            <p>Recipes ingredients: {recipes[0].ingredients}</p>
            <p>Recipes ingredients: {recipes[0].ingredients}</p>
            <p>Recipes cooking_method: {recipes[0].cooking_method}</p>
            <p>Recipes rating: {recipes[0].rating}</p>
            <br />
            <h6>Recipes Name: {recipes[1].name}</h6>
            <p>Recipes description: {recipes[1].description}</p>
            <p>Recipes ingredients: {recipes[1].ingredients}</p>
            <p>Recipes ingredients: {recipes[1].ingredients}</p>
            <p>Recipes cooking_method: {recipes[1].cooking_method}</p>
            <p>Recipes rating: {recipes[1].rating}</p>
            <br />
            <h6>Recipes Name: {recipes[2].name}</h6>
            <p>Recipes description: {recipes[2].description}</p>
            <p>Recipes ingredients: {recipes[2].ingredients}</p>
            <p>Recipes ingredients: {recipes[2].ingredients}</p>
            <p>Recipes cooking_method: {recipes[2].cooking_method}</p>
            <p>Recipes rating: {recipes[2].rating}</p>
            
          </Card.Text>
          <Button onClick={handleFavourite} variant="primary" disabled ={disable && true}>Favourite</Button>
          <ToastContainer  />
          
        </Card.Body>
      </Card>
          </Container>
        </div>
    );
};

export default DataDetails;