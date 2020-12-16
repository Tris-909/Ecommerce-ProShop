import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, getAllItemsCart } from '../redux/actions/cartActions';
import Helmet from '../components/Helmet';
import styled from 'styled-components';

//TODO: CART CARD 
const CartCardItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    border: 1px solid grey;
    margin-bottom: 1rem;
    padding: 1rem; 

    @media (max-width: 1050px) {
        flex-direction: column;
    }
`;

const CardImageContainer = styled.div`
    width: 40%;

    @media (max-width: 550px) {
        width: 60%;
    }
`;

const CardImage = styled.img`
    width: 100%;
`;

const CardInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardBottomContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CardTextContainer = styled.div`
    display: flex;
    margin-left: 15px;
    flex-direction: column;
`;

const CardProductName = styled.div`
    font-size: 1rem;

    @media (max-width: 400px) {
        font-size: 0.8rem;
    }
`;

const CardProductPrice = styled.div`
    font-family: Rokkitt;
    font-size: 1.5rem;
`;

const RemoveButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    cursor: pointer;
`;
//TODO: END OF CARD CART /////////////////////////////////

const CartTitle = styled.div`
    font-family: Rokkitt;
    text-align: center;
    font-size: 3rem;

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`;

const CartEmptyText = styled.div`
    font-size: 2.5rem;
    font-family: Rokkitt;
    color: black;
    text-align: center;
    margin-top: 2rem;
`;

const CartScreen = ({ match, location, history }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cartList);
    const { success: removeCartItemSuccess } = useSelector(state => state.removeCart);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getAllItemsCart());
    }, [dispatch, removeCartItemSuccess]);

    const removeFromCartHandler = (id) => {
        dispatch(removeItemFromCart(id));
    }

    const checkOutHandler = () => {
        if (user) {
            history.push('/shipping');
        } else {
            history.push('/login');
        }
    }

    return (
        <Row>
            <Helmet title='Your Shopping Cart' href='/cart' />
            <Col md={8}>
                <CartTitle>Shopping Cart</CartTitle>
                {cartItems.length === 0 ? <CartEmptyText>Your Cart is empty ! <Link to="/" style={{ textDecoration: 'underline' }}>Go Back</Link></CartEmptyText> : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <CartCardItem key={item._id}>
                                <CardImageContainer>
                                    <CardImage src={item.productImage} alt={item.productName} fluid rounded/>
                                </CardImageContainer>
                                    
                                <CardInfoContainer>
                                    <CardTextContainer>
                                        <CardProductName>
                                            <Link to={`/product/${item.itemId}`}>{item.productName}</Link>
                                        </CardProductName>

                                        <CardBottomContainer>
                                            <CardProductPrice>
                                                ${item.productPrice}
                                            </CardProductPrice>

                                            <RemoveButton onClick={() => removeFromCartHandler(item.itemId)}>
                                                Remove                                        
                                            </RemoveButton>
                                        </CardBottomContainer>
                                    </CardTextContainer>
                                </CardInfoContainer>
                            </CartCardItem>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <p style={{fontSize: '1.2rem', padding: '1rem 0'}}> Count Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items</p>
                            <p style={{fontSize: '1.2rem'}}> Total: ${cartItems.reduce((acc, item) => acc + item.quantity*item.productPrice, 0)} </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button 
                                type="button" 
                                className='btn-block' 
                                disabled={cartItems.length === 0}
                                onClick={() => checkOutHandler()}>
                                    CHECK OUT
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen;
