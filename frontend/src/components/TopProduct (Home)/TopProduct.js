import React from 'react'
import { Row, Col, Spinner, Button } from 'react-bootstrap';
import Product from '../Product';
import Message from '../Message';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopProductTitle = styled.p`
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 0rem;
    font-family: Rokkit;

    & a:hover {
        text-decoration: none;
    }

    @media only screen and (max-width: 450px) {
        font-size: 2rem;
    }
`;

const Container = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

const TopProduct = ({ loading, itemArray, title, itemLink, listItemLink }) => {
    return (
        <Container>
            <TopProductTitle><Link to={listItemLink}>{title}</Link></TopProductTitle>
            <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
               { !loading ? itemArray.length > 0 ? itemArray.map((tv) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={4} key={tv._id}>
                           <Product product={tv} link={itemLink}/>
                        </Col>
                    );
                }) : (
                    <Message variant="danger" content="Something is wrong, please try to reload"/>
                ) : <Spinner animation="border" size="lg" style={{ width: '100px', height: '100px' }} /> 
               }
            </Row>

            <Row style={{ justifyContent: 'center', alignItems: 'center', marginTop: '1rem'}}>
                <Link to={listItemLink}>
                    <Button variant="outline-dark">See More</Button>
                </Link>
            </Row>       
        </Container>
    )
}

export default TopProduct;
