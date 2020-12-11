import React from 'react'
import {Col, Image} from 'react-bootstrap';

const ProductImage = ({ name, image, laptop = false }) => {
    return (
        <Col md={laptop ? 8 : 5}>
            <Image src={image} alt={name} fluid />
        </Col>
    );
}

export default ProductImage
