import React from 'react'
import {Col, Image} from 'react-bootstrap';

const ProductImage = ({ name, image }) => {
    return (
        <Col md={5}>
            <Image src={image} alt={name} fluid />
        </Col>
    );
}

export default ProductImage
