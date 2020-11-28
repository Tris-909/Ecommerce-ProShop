import React, {useEffect} from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../redux/actions/orderActions';
import Message from '../components/Message';
import Loading from '../components/Loading';
import {Link} from 'react-router-dom';

const OrderScreen = ({ match }) => {
    const id = match.params.id;  
    const { orderItem, loading, success, error } = useSelector(state => state.loadedOrder);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!orderItem || orderItem._id !== id) {
            dispatch(getOrderById(id))
        }
    }, [id, orderItem, dispatch]);

    const date = String(orderItem.createdAt).split('T')[0];

    return loading ? <Loading /> : error ? <Message variant="error" content={error} /> : success ? (<Row>
        <Col md={8}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h2>Order {orderItem._id}</h2>
                    <p> 
                        <strong>Buyer : </strong>
                        {orderItem.user.name} - {orderItem.user.email}
                    </p>                 
                    <p> 
                        <strong>Address : </strong>
                        {orderItem.shippingAddress.address},  {orderItem.shippingAddress.city}, {orderItem.shippingAddress.postalCode}, {orderItem.shippingAddress.country} 
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p> 
                        <strong>Method : </strong>
                        {orderItem.paymentMethod} 
                    </p>
                    <p>
                        {orderItem.isPaid ? <Message variant="success" content="Already Paid" /> : <Message content="Haven't been paid yet" variant="danger" />}
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Order Items</h2>
                    { !orderItem.orderItems.length ? <Message content="Your cart is empty" variant="secondary" /> : (
                      <ListGroup variant="flush">
                        {orderItem.orderItems.map((item, index) => (
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
        <Col md={4}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Order Summary</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col> Date:  </Col>
                            <Col> {date} </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col> Delivery Status:  </Col>
                            <Col> {orderItem.isDelivered ? 'Is Delivering...' : 'Not Shipping'} </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col> <h4>TOTAL :</h4> </Col>
                            <Col> <h5>${orderItem.totalPrice}</h5> </Col>
                        </Row>
                    </ListGroup.Item>
                    {
                        error ? (
                            <ListGroup.Item>
                                <Message content="unable to proceed, please try again" variant="danger" />
                            </ListGroup.Item>
                        ) : null 
                    }
                </ListGroup>
            </Card>
        </Col>
    </Row>
) : null;
}

export default OrderScreen;
