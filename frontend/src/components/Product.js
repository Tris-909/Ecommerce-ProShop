import React from 'react'
import Rating from './Rating';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
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
