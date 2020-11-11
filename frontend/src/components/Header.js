import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>MERN Shops</Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                      <LinkContainer to="/cart">
                        <Nav.Link href="/cart">
                            <i className='fas fa-shopping-cart' style={{ marginRight: 8 }}></i>
                            Cart
                        </Nav.Link>
                      </LinkContainer>

                    <LinkContainer to="/login">
                        <Nav.Link href="/login">
                            <i className='fas fa-user' style={{ marginRight: 8 }}></i>
                            Sign In
                        </Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

export default Header;