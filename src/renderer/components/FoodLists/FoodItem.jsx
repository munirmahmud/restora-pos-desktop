import React from 'react';
import { Card, Col } from 'react-bootstrap';
import foodPlaceholder from '../../../../assets/food-placeholder.png';
import './food.item.styles.scss';

const FoodItem = ({ item }) => {
  return (
    <Col md={2}>
      <Card className="food-card">
        <div className="food-image">
          {item?.image ? (
            <Card.Img variant="top" src={item.image} />
          ) : (
            <Card.Img variant="top" src={foodPlaceholder} />
          )}
        </div>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FoodItem;