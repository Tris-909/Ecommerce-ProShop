import React from 'react'
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const FullScreenContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;

    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

const LoadingScreen = () => {
    return (
        <FullScreenContainer>
             <Spinner animation="border" variant="dark" style={{width: '100px', height: '100px'}} /> 
        </FullScreenContainer>
    )
}

export default LoadingScreen;
