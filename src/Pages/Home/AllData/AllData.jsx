import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllData.css';

const AllData = ({ data }) => {
  const { name, picture, bio,recipes } = data;
  return (
    
      <Card className='margin'>
        <Card.Img style={{height: 300}} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            
            {recipes[0].name}
          </Card.Text>
          <Link to={`/data/${data.id}`}><Button variant="primary">View Recipes</Button></Link>
        </Card.Body>
      </Card>
   
  );
};

export default AllData;
