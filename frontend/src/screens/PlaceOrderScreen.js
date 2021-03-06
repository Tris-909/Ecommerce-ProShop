import React, {useEffect} from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../redux/actions/orderActions';
import { getAllItemsCart } from '../redux/actions/cartActions';
import { removeProductsInCartAfterBuy } from '../redux/actions/cartActions';
import Message from '../components/Message';
import CheckOutStep from '../components/CheckOutStep';
import {Link} from 'react-router-dom';
import Helmet from '../components/Helmet'; 

const PlaceOrderScreen = ({ history }) => {
    const dispatch = useDispatch();
    const { cartItems, shippingAddress, paymentMethod } = useSelector(state => state.cart);
    const { orders, success, error } = useSelector(state => state.orders);

    useEffect(() => {
        dispatch(getAllItemsCart());
    }, []);

    useEffect(() => {
        if (success) {
            history.push(`orders/${orders._id}`);
        }
        //enable-disable-next-line
    }, [history, success]);

    const addDecimals = (num) => {
        return (Math.round(num*100)/100).toFixed(2);
    }

    let itemsPrice, totalOnSale, shippingPrice, taxPrice, totalPrice;
    if (cartItems !== undefined) {
        itemsPrice = cartItems.reduce((acc, curItem) => acc + (curItem.productPrice - curItem.onSale) * 1, 0);
        totalOnSale = cartItems.reduce((acc, curItem) => acc + curItem.onSale, 0);
        shippingPrice = itemsPrice > 200 ? 0 : 10;
        taxPrice = addDecimals(Number((itemsPrice/100)*5).toFixed(2));
        totalPrice = Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice);
    }

    const onPlaceOrderHandler = () => {
        dispatch(createOrder(
            cartItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            totalOnSale
        ));

        dispatch(removeProductsInCartAfterBuy());
    }

    return (
        <>
            <CheckOutStep step1 step2 step3 step4 />
            <Helmet title={`PlaceOrder | ProShop`} href="/placeorder" />
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
                            { cartItems !== undefined ? !cartItems.length ? <Message content="Your cart is empty" variant="secondary" /> : (
                              <ListGroup variant="flush">
                                {cartItems.map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item.productImage} alt={item.productName} fluid rounded />
                                            </Col>
                                            <Col>
                                                <Link to={`/product/${item.itemId}`}>
                                                    {item.productName}
                                                </Link>
                                            </Col>
                                            {
                                                item.onSale !== 0 ? (
                                                    <Col md={4}>
                                                        1 x ${item.productPrice - item.onSale} = ${1 * item.productPrice} - ${item.onSale}
                                                    </Col>
                                                ) : (
                                                    <Col md={4}>
                                                        1 x ${item.productPrice} = ${1 * item.productPrice}
                                                    </Col>
                                                )
                                            }

                                        </Row>
                                    </ListGroup.Item>
                                ))}
                              </ListGroup>  
                            ) : null}
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
                                    <Col> OnSale </Col>
                                    <Col> ${totalOnSale} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col> ShippingPrice </Col>
                                    <Col> {shippingPrice === 0 ? "Free" : `$${shippingPrice}`} </Col>
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
                            {
                                error ? (
                                    <ListGroup.Item>
                                        <Message content="unable to proceed, please try again" variant="danger" />
                                    </ListGroup.Item>
                                ) : null 
                            }
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
