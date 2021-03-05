import React, {useState} from 'react'
import {Col } from 'react-bootstrap';
import styled from 'styled-components';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Image = styled.img`
    width: 200px;
    height: 200px;

    @media only screen and (min-width: 400px) {
        width: 300px;
        height: 300px;
    }

    @media only screen and (min-width: 500px) {
        width: 350px;
        height: 350px;
    }

    @media only screen and (min-width: 600px) {
        width: 400px;
        height: 400px;
    }

    @media only screen and (min-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @media only screen and (min-width: 880px) {
        width: 400px;
        height: 400px;
    }

    @media only screen and (min-width: 1000px) {
        width: 500px;
        height: 500px;
    }
`;

const ProductImage = ({ name, subImages }) => {
    const [value, setValue] = useState(0);

    const onChange = (value) => {
        setValue(value);
    }

    return (
        <Col md={8}>
            <Carousel
                infinite
                value={value}
                onChange={onChange}
                offset={100}
            >
                {
                    subImages.map((image, index) => {
                        return(
                            <Image
                                key={index} 
                                src={image} 
                                alt={name} />
                        )
                    })
                }
            </Carousel>
            <Dots
              value={value}
              onChange={onChange}
              number={subImages.length}
              thumbnails={subImages.map((image, index) => {
                  return  (<img key={index} 
                style={{height: '50px', width: '40px'}}  src={image} alt={name} />)
              })}
            />
        </Col>   
    );
}

export default ProductImage
