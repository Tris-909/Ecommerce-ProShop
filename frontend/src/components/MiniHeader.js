import React from 'react';
import styled from 'styled-components';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = styled.div`
    width: 100%;
    background-color: #fff447;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vh 5%;
`;

const Content = styled.div`
    font-size: 1rem;
    color: black;
    cursor: pointer;
`;

const MiniHeader = () => {
    return(
        <NavBar>
            <Content> 
                <LinkContainer to='/storefinder'>
                    <i className="fas fa-map-marker-alt"></i> Find Stores
                </LinkContainer>
            </Content>
            <Content>
                <LinkContainer to='/storefinder'>
                    <i className="fas fa-handshake"></i> Help & Support
                </LinkContainer>
            </Content>
        </NavBar>
    );
}

export default MiniHeader;