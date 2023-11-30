import React from 'react';
import { Card } from 'react-bootstrap';
import './skills.scss'

const SkillCard = ({ image, title, description }) => (
 <Card style={{ width: '18rem', margin: '5rem 1rem 1rem 1rem' }} className="custom-card">
  <Card.Img variant='top' src={image} className='card-img' style={{ objectFit: 'cover', width: '100%', height: '250px'  }} />
  <Card.Body>
    <Card.Title className='card-title'>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
 </Card>
);

export default SkillCard;
