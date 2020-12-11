import React from 'react'
import Rating from './Rating';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Product = ({ product, link = '/product' }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`${link}/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
                <Link to={`${link}/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating 
                        rating={product.rating} 
                        text={`${product.numReviews} reviews`}
                    />
                </Card.Text>
                <Card.Text as="h3">
                    $ {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
