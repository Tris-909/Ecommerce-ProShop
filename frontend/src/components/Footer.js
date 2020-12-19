import React from 'react'
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 25%;
    margin-top: 1rem;
    background-color: rgb(252, 240, 3);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 580px) {
        flex-direction: column;
    }
`;

const CopyRightText = styled.div`
    font-family: Rokkitt;
    font-size: 1.3rem;
    font-weight: 700;
    color: black;
`;

const PaymentText = styled.div`
    font-size: 1.3rem;
    color: black;

    i {
        margin-right: 1rem;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Col className='text-center py-3'>
               <CopyRightText> Tri Tran @Copyright </CopyRightText> 
            </Col>
            <Col className='text-center py-3'>
                <PaymentText>
                    We accept 
                    <i className="fab fa-cc-paypal" style={{marginLeft: '1rem'}}></i>
                    <i className="fas fa-credit-card"></i>
                </PaymentText>
            </Col>
        </FooterContainer>
    )
}

export default Footer;
