import React, {useState} from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckOutStep from '../components/CheckOutStep';
import {Link} from 'react-router-dom';

const PlaceOrderScreen = () => {
    const dispatch = useDispatch();
    const { shippingAddress, cartItems, paymentMethod } = useSelector(state => state.cart);

    const addDecimals = (num) => {
        return (Math.round(num*100)/100).toFixed(2);
    }

    let itemsPrice = cartItems.reduce((acc, curItem) => acc + curItem.price * curItem.qty, 0);
    let shippingPrice = itemsPrice > 200 ? 0 : 10;
    let taxPrice = addDecimals(Number((itemsPrice/100)*5).toFixed(2));
    let totalPrice = Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice);

    const onPlaceOrderHandler = () => {
        console.log(typeof(itemsPrice));
        console.log(typeof(taxPrice));
        console.log(totalPrice);
    }

    return (
        <>
            <CheckOutStep step1 step2 step3 step4 />
            <Row>
                <Col md={9}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p> 
                                <strong>Address : </strong>
                                {shippingAddress.address},  {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country} 
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p> 
                                <strong>Method : </strong>
                                {paymentMethod} 
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            { !cartItems.length ? <Message content="Your cart is empty" variant="secondary" /> : (
                              <ListGroup variant="flush">
                                {cartItems.map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col>
                                                <Link to={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                {item.qty} x ${item.price} = ${item.qty * item.price}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                              </ListGroup>  
                            ) }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col> Items </Col>
                                    <Col> ${itemsPrice} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col> ShippingPrice </Col>
                                    <Col> {shippingPrice == 0 ? "Free" : `$${shippingPrice}`} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col> TaxPrice </Col>
                                    <Col> ${taxPrice} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col> TOTAL : </Col>
                                    <Col> ${totalPrice} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button 
                                    type="button" 
                                    className="btn-block" 
                                    disabled={cartItems.length === 0}
                                    onClick={onPlaceOrderHandler}>
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen;
