import React from 'react'
import { Row, Col, Spinner, Button } from 'react-bootstrap';
import Product from '../Product';
import Message from '../Message';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopProductTitle = styled.h1`
    text-decoration: underline; 
    font-family: 'Rokkitt;'
`;

const Container = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

const TopProduct = ({ loading, itemArray, title, itemLink }) => {
    return (
        <Container>
            <TopProductTitle>{title}</TopProductTitle>
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

            <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/tvs">
                    <Button variant="outline-dark">See More</Button>
                </Link>
            </Row>       
        </Container>
    )
}

export default TopProduct;
