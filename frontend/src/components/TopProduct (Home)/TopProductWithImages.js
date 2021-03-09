import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Row, Col  } from 'react-bootstrap';
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom';

const BackgroundRed = styled.div`
    padding: 1rem;
    row-gap: 1.5rem;
    background-color: black;
    border: 7px solid black;
    flex-basis: 0;

    @media only screen and (max-width: 525px) {
        overflow: auto;
        white-space: nowrap;

        & div {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }
`;

const BackgroundBlue = styled.div`
    background-color: black;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 150px;
    width: 150px;
    transition: all 0.2s;
    transition: all 0.5s;
    border: 1px solid gray;

    &:hover {
        size: 90%;
    }

    @media only screen and (max-width: 750px) {
        height: 100px;
        width: 100px;
    }
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 0;
`;

const WordContainer = styled.div`
    color: white;
    font-weight: 700;
    text-align: center;
    font-size: 16px;

    @media only screen and (max-width: 750px) {
        font-size: 12px;
    }
`;

const CarouselImage = styled.img`
    width: 100%;
    height: 600px;

    @media only screen and (max-width: 750px) {
        height: 500px;
    }

    @media only screen and (max-width: 550px) {
        height: 400px;
    }

    @media only screen and (max-width: 450px) {
        height: 300px;
    }

    @media only screen and (max-width: 375px) {
        height: 250px;
    }
`;

const SectionTitle = styled.p`
    font-size: 4rem;
    font-weight: 700;
    color: black;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: Rokkit;

    @media only screen and (max-width: 950px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 720px) {
        font-size: 2.5rem;
    }
`;

const TopProductWithImages = ({ itemArray }) => {
    const [currentSubImages, setCurrentSubImages] = useState([]);
    const [currentID, setCurrentID] = useState("");

    useEffect(() => {
        setCurrentSubImages(itemArray[0].subImages.slice(1));
        setCurrentID(itemArray[0]._id);
    }, []);


    const changeSubImages = (index) => {
        setCurrentSubImages(itemArray[index].subImages.slice(1));
        setCurrentID(itemArray[index]._id);
    }

    return(
        <>
        <div>
            <SectionTitle> Diving into a world of magic !</SectionTitle>
        </div>
        <Row>
            <Col sm={12} md={12} lg={12} xl={10} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <BackgroundBlue>
                    <Carousel
                        animation="slide"
                        indicators={false}
                    >
                        {
                            currentSubImages.map((image, index) => {
                                return(
                                    <Link key={index} to={`/product/${currentID}`}>
                                        <CarouselImage
                                            key={index} 
                                            src={image} 
                                            alt="Ingame Footage" />
                                    </Link>
                                )
                            })
                        }
                    </Carousel>
                </BackgroundBlue>
            </Col>
            <Col sm={12} md={12} lg={12} xl={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <BackgroundRed className="responsiveGameContainer">
                    {
                        itemArray.map((item, index) => {
                            return(
                                <LeftContainer key={index}>
                                    <ImgContainer onClick={() => changeSubImages(index)}>
                                        <img src={item.image} alt="?" style={{height: '100%', width: '100%', cursor: "pointer"}} />
                                    </ImgContainer>
                                    <WordContainer>
                                        {item.name}
                                    </WordContainer>
                                </LeftContainer>

                            );
                        })
                    }
                </BackgroundRed>
            </Col>
        </Row>
        </>
    );
}

export default TopProductWithImages;