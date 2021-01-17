import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
`;

const MainText = styled.div`
    font-size: 4rem;

    @media (max-width: 900px) {
        font-size: 3rem;
    }

    @media (max-width: 675px) {
        font-size: 1.5rem;
    }
`;

const SubText = styled.div`
    font-size: 3rem;

    @media (max-width: 900px) {
        font-size: 2rem;
    }

    @media (max-width: 675px) {
        font-size: 1.5rem;
    }
`;

const Link = styled.a`
    text-decoration: underline;
`;

const ErrorHandlerPage = () => {
    return (
        <Container>
            <MainText> Ops, This page is not existed </MainText>
            <SubText>  Click <Link href="/">here</Link> to come back </SubText>
        </Container>
    );
}

export default ErrorHandlerPage;