import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../redux/actions/userActions';
import {GET_ORDER_OF_USER_RESET, GET_USER_DETAILS_RESET} from '../redux/actions/actionTypes';

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const logOutHandler = () => {
        dispatch({ type: GET_ORDER_OF_USER_RESET });
        dispatch({ type: GET_USER_DETAILS_RESET });
        dispatch(logOut());
    }

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

                    {
                        user ? (
                            <NavDropdown title={user.name} id='username'>
                                <LinkContainer to="profile">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logOutHandler}>
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                        <LinkContainer to="/login">
                            <Nav.Link href="/login">
                                <i className='fas fa-user' style={{ marginRight: 8 }}></i>
                                Sign In
                            </Nav.Link>
                        </LinkContainer>
                        )
                    }

                  </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

export default Header;