import React, {useState} from 'react';
import styled from 'styled-components';
import { Row, Col, Image  } from 'react-bootstrap';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const BackgroundRed = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

const BackgroundBlue = styled.div`
    background-color: blue;
`;

const ImgContainer = styled.div`
    width: 100%;
    height: 225px;
`;

const TopProductWithImages = ({ itemArray }) => {
    const [value, setValue] = useState(0);
    const [currentSubImages, setCurrentSubImages] = useState([]);

    const onChange = (value) => {
        setValue(value);
    }

    return(
        <Row>
            <Col sm={12} md={3} lg={3} xl={3}>
                <BackgroundRed>
                    {
                        itemArray.map((item, index) => {
                            return(
                                <ImgContainer>
                                    <img src={item.image} alt="?" style={{height: '100%', width: '100%'}} />
                                </ImgContainer>
                            );
                        })
                    }
                </BackgroundRed>
            </Col>
            <Col sm={12} md={9} lg={9} xl={9}>
                <BackgroundBlue>
                    <Carousel
                    infinite
                    value={value}
                    onChange={onChange}
                    offset={100}
                    >
                        {
                            currentSubImages.map((image, index) => {
                                return(
                                    <Image
                                        key={index} 
                                        src={image} 
                                        alt="Game"
                                        rounded  />
                                )
                            })
                        }
                    </Carousel>
                </BackgroundBlue>
            </Col>
        </Row>
    );
}

export default TopProductWithImages;