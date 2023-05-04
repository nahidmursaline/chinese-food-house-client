import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllData.css';

const AllData = ({ data }) => {
  const { name, picture, bio,recipes, years_of_experience,  num_recipes, likes} = data;
  return (
    
    <Container className='marginn'>
      <Card >
    <Card.Img style={{height: 400}} variant="top" src={picture} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <p>Years of Experience: {years_of_experience}</p>
        <p>Number of Recipes: {num_recipes}</p>
        <p>Likes: {likes}</p>
        {recipes[0].name}
      </Card.Text>
      <Link to={`/data/${data.id}`}><Button variant="primary">View Recipes</Button></Link>
    </Card.Body>
  </Card>

    </Container>
   
  );
};

export default AllData;
