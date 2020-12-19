import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SubNavBar = styled.nav`
    width: 100%;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;

    &:hover {
        text-decoration: none;
    }
`;

const NavItem = styled.div`
    font-size: 1.25rem;
    padding: 0rem 1rem;
    font-weight: 600;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s;
`;

const SubLink = styled(Link)`
    width: 100%;
    padding: 1rem 0rem;

    &:hover {
        text-decoration: none;
        background-color: rgb(252, 240, 3);

        div {
            color: black;
        }
    }
`;

const SubNavbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 990);

    const updateMedia = () => {
        setScreenWidth(window.innerWidth <= 990);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return !screenWidth ? (
        <SubNavBar>
            <SubLink to="/laptops">
                <NavItem>
                    <i className="fas fa-laptop" style={{ marginRight: '0.5rem' }}></i>
                    Laptops
                </NavItem>
            </SubLink>
            <SubLink to="/tvs">
                <NavItem>
                    <i className="fas fa-tv" style={{ marginRight: '0.5rem' }}></i>
                    TVs 
                </NavItem>
            </SubLink>
            <SubLink to="/phones">
                <NavItem>
                    <i className="fas fa-mobile-alt" style={{ marginRight: '0.5rem' }}></i>
                    Phones
                </NavItem>
            </SubLink>
            <SubLink to="/headphone">
                <NavItem>
                    <i className="fas fa-headphones" style={{ marginRight: '0.5rem' }}></i>
                    HeadPhones
                </NavItem>
            </SubLink>
            <SubLink to="/game">
                <NavItem style={{borderRight: 'none'}}>
                    <i className="fas fa-gamepad" style={{ marginRight: '0.5rem' }}></i>
                    Gaming
                </NavItem>
            </SubLink>
        </SubNavBar>
    ) : null
}

export default SubNavbar;
