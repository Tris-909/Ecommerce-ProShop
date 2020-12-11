import React from 'react'
import {Col, ListGroup} from 'react-bootstrap';
import Rating from '../Rating';

const ProductInfo = (props) => {
    const { name, price, rating, numReviews, description, laptop = false } = props;

    return (
        <Col md={laptop ? 12 : 4}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating rating={rating} text={`${numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
    );
}

export default ProductInfo;
