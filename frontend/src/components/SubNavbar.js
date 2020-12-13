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
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

const NavItem = styled.div`
    font-size: 1.25rem;
    padding: 0rem 1rem;
    border-right: 1px solid white;
    font-weight: 600;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubNavbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 950);

    const updateMedia = () => {
        setScreenWidth(window.innerWidth < 950);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return !screenWidth ? (
        <SubNavBar>
            <Link to="/laptops" style={{width: '100%'}}>
                <NavItem>
                    <i className="fas fa-laptop" style={{ marginRight: '0.5rem' }}></i>
                    Laptops
                </NavItem>
            </Link>
            <Link to="/tvs" style={{width: '100%'}}>
                <NavItem>
                    <i className="fas fa-tv" style={{ marginRight: '0.5rem' }}></i>
                    TVs 
                </NavItem>
            </Link>
            <Link to="/phones" style={{width: '100%'}}>
                <NavItem>
                    <i className="fas fa-mobile-alt" style={{ marginRight: '0.5rem' }}></i>
                    Phones
                </NavItem>
            </Link>
            <Link to="/headphones" style={{width: '100%'}}>
                <NavItem>
                    <i className="fas fa-headphones" style={{ marginRight: '0.5rem' }}></i>
                    HeadPhones
                </NavItem>
            </Link>
            <Link to="/gaming" style={{width: '100%'}}>
                <NavItem style={{borderRight: 'none'}}>
                    <i className="fas fa-gamepad" style={{ marginRight: '0.5rem' }}></i>
                    Gaming
                </NavItem>
            </Link>
        </SubNavBar>
    ) : null
}

export default SubNavbar;
