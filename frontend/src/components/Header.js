import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../redux/actions/userActions';
import {GET_ORDER_OF_USER_RESET, GET_USER_DETAILS_RESET, GET_ALL_USERS_RESET} from '../redux/actions/actionTypes';
import {withRouter} from 'react-router'

const Header = ({ history }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const logOutHandler = () => {
        dispatch({ type: GET_ORDER_OF_USER_RESET });
        dispatch({ type: GET_USER_DETAILS_RESET });
        dispatch({ type: GET_ALL_USERS_RESET });
        dispatch(logOut());
        history.push('/');
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
                        user && user.isAdmin ? (
                            <NavDropdown title="Admin" id="adminuser" style={{marginRight: '0rem'}}>
                                <LinkContainer to="/admin/usersList">
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/admin/productsList">
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/admin/ordersList">
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        ) : null
                    }

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

export default withRouter(Header);