import React, {useState, useEffect} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../redux/actions/userActions';
import {GET_ORDER_OF_USER_RESET, GET_USER_DETAILS_RESET, GET_ALL_USERS_RESET} from '../redux/actions/actionTypes';
import {withRouter} from 'react-router'
import SearchBox from './SearchBox';
import styled from 'styled-components';

const Brand = styled.div`
    color: black;
    font-size: 1.75rem;
    font-weight: 800;
    font-family: Rokkitt;
`;

const AddBlackColor = styled.div`
    color: black;
    margin-right: 0.5rem;
    display: flex;
`;

const WidthExpand = styled.div`
`;


const Header = ({ history }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 1000);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    //TODO: Hide or Show the sub nav-bar when screenSize < 950
    const updateMedia = () => {
        setScreenWidth(window.innerWidth < 1000);
      };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const logOutHandler = () => {
        dispatch({ type: GET_ORDER_OF_USER_RESET });
        dispatch({ type: GET_USER_DETAILS_RESET });
        dispatch({ type: GET_ALL_USERS_RESET });
        dispatch(logOut());
        history.push('/');
    }

    return (
        <Navbar variant="dark" collapseOnSelect expand="lg" style={{backgroundColor: '#fcf003'}}>
            <LinkContainer to="/">
                    <Navbar.Brand>
                        <Brand>
                            ProShop
                        </Brand>
                    </Navbar.Brand>
                </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'black'}} />
            
            <Navbar.Collapse id="basic-navbar-nav" style={{color: 'black'}}>
                  { !screenWidth ? <SearchBox /> : null }

                  {
                      screenWidth ? (
                        <NavDropdown title={`Products`} style={{ fontSize: '1.2rem',marginRight: '1rem 0rem' ,color: 'black', padding: '0rem'}} id="adminuser">
                                <LinkContainer to="/laptops">
                                    <NavDropdown.Item>Laptops</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/tvs">
                                    <NavDropdown.Item>TVs</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/phones">
                                    <NavDropdown.Item>Phones</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/headphones">
                                    <NavDropdown.Item>Headphones</NavDropdown.Item>
                                </LinkContainer>                                
                                <LinkContainer to="/gaming">
                                    <NavDropdown.Item>Gaming</NavDropdown.Item>
                                </LinkContainer>
                        </NavDropdown>
                      ) : null
                  }

                  <Nav className="ml-auto">
                    <LinkContainer to="/cart">
                      <Nav.Link href="/cart">
                          <AddBlackColor>
                            <i className='fas fa-shopping-cart' style={{ marginRight: 8, fontSize: '1.2rem' }}></i>
                            <div>
                                Your Cart
                            </div>
                          </AddBlackColor>
                      </Nav.Link>
                    </LinkContainer>

                    {
                        user && user.isAdmin ? (
                            <NavDropdown title={<i className="fas fa-crown" style={{ fontSize: '1.2rem', marginRight: '0rem', color: 'black'}}></i>} id="adminuser">
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
                            <NavDropdown title={<i className="fas fa-cog" style={{ marginRight: 8, fontSize: '1.2rem', color: 'black' }}></i>} id='username'>
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logOutHandler}>
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                        <LinkContainer to="/login">
                            <Nav.Link href="/login">
                            <AddBlackColor>
                                <i className='fas fa-user' style={{ marginRight: 8, fontSize: '1.2rem'}}></i>
                                Sign In
                            </AddBlackColor>
                            </Nav.Link>
                        </LinkContainer>
                        )
                    }
                  </Nav>
                </Navbar.Collapse>
            
            <WidthExpand style={{width: screenWidth ? '100%' : '0%'}}>
                {screenWidth ? (<SearchBox />) : null}
            </WidthExpand>
        </Navbar>
    );
}

export default withRouter(Header);