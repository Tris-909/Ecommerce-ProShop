import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/actions/cartActions';

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (productId) {
            dispatch(addItemToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeItemFromCart(id));
    }

    const checkOutHandler = () => {
        console.log('checkout');
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <h2>Your Cart is empty <Link to="/">Go Back</Link></h2> : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={4}>
                                        <Link to={`/product/{item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                    <Form.Control 
                                        style={{ padding: "0.5rem 0.75rem" }}
                                        as="select" 
                                        value={item.qty}
                                        onChange={(e) => dispatch(addItemToCart(item.product, Number(e.target.value)))}>
                                            {
                                            [...Array(item.countInStock).keys()].map(x => 
                                                (<option key={x+1} value={x+1}> {x+1} </option>))
                                            }        
                                    </Form.Control> 
                                    </Col>
                                    <Col md={2}>
                                        <Button 
                                            type="button" 
                                            variant="light"
                                            onClick={() => removeFromCartHandler(item.product)}>
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
                            <p style={{fontSize: '1.2rem', padding: '1rem 0'}}> Count Items: {cartItems.reduce((acc, item) => acc + item.qty, 0)} items</p>
                            <p style={{fontSize: '1.2rem'}}> Total: ${cartItems.reduce((acc, item) => acc + item.qty*item.price, 0)} </p>
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
