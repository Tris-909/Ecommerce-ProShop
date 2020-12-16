import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, getAllItemsCart } from '../redux/actions/cartActions';
import Helmet from '../components/Helmet';

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
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <h2>Your Cart is empty <Link to="/">Go Back</Link></h2> : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item._id}>
                                <Row>
                                    <Col md={4}>
                                        <Image src={item.productImage} alt={item.productName} fluid rounded/>
                                    </Col>
                                    <Col md={4}>
                                        <Link to={`/product/${item.itemId}`}>{item.productName}</Link>
                                    </Col>
                                    <Col md={2}>${item.productPrice}</Col>
                                    <Col md={2}>
                                        <Button 
                                            type="button" 
                                            variant="light"
                                            onClick={() => removeFromCartHandler(item.itemId)}>
                                                <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
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
