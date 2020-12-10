import React, {useState, useEffect} from 'react'
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById, payOrder } from '../redux/actions/orderActions';
import { putIsDeliveredStatusAsAdmin } from '../redux/actions/adminActions';
import Message from '../components/Message';
import Loading from '../components/Loading';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { PUT_ISPAID_STATUS_ORDER_RESET, PUT_IS_DELIVERED_AS_ADMIN_RESET } from '../redux/actions/actionTypes';
import Helmet from '../components/Helmet';

const OrderScreen = ({ match }) => {
    const id = match.params.id;  
    const { orderItem, loading, success, error } = useSelector(state => state.loadedOrder);
    const { loading: loadingPay, success: successPay} = useSelector(state => state.updatedIsPaidOrder);
    const { loading: updateIsDeliveredLoading, success: successIsDeliveredStatus, error:  errorIsDeliveredStatus} = useSelector(state => state.isDeliveredOrderAdmin);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        if (!orderItem || orderItem._id !== id) {
            dispatch(getOrderById(id))
        }
    }, [id, orderItem, dispatch]);

    useEffect(() => {
        const addPaypalScript = async () => {
            const { data: clientid } = await axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientid}`
            script.onload = () => {
                setSdkReady(true);
            }

            document.body.appendChild(script);
        }

        if (!orderItem || successPay ) {
            dispatch({
                type: PUT_ISPAID_STATUS_ORDER_RESET
            })
            dispatch(getOrderById(id));
        } else if (!orderItem.isPaid) {
            if (!window.paypal) {
                addPaypalScript();
            } else {
                setSdkReady(true);
            }
        }
    }, [id, successPay, dispatch, orderItem])

    useEffect(() => {
        if (!orderItem || successIsDeliveredStatus) {
            dispatch({
                type: PUT_IS_DELIVERED_AS_ADMIN_RESET
            });
            dispatch(getOrderById(id));
        }
    }, [dispatch, id, successIsDeliveredStatus, orderItem]);

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult);
        dispatch(payOrder(id, paymentResult));
    }

    const changeDeliveryStatus = () => {
        dispatch(putIsDeliveredStatusAsAdmin(id));
    }

    const date = String(orderItem.createdAt).split('T')[0];

    return loading ? <Loading /> : error ? <Message variant="error" content={error} /> : success ? (<Row>
        <Col md={8}>
            <Helmet title={`Order | ProShop`} href="/orders" />
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
                            { updateIsDeliveredLoading ? <Loading size="sm" /> : errorIsDeliveredStatus ? <Message variant="danger" content="ERROR please try again" /> : (
                                <Col> {orderItem.isDelivered ? 'Is Delivering...' : 'Not Shipping'} </Col>
                            ) }
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
                    {
                        user.isAdmin ? (
                        <ListGroup.Item>
                            <Button 
                                onClick={changeDeliveryStatus}
                                className="btn-block" 
                                type="button"
                                >
                                    CHANGE DELIVERY STATUS
                            </Button>
                        </ListGroup.Item>
                        ) : null
                    }
                    
                    {
                        !orderItem.isPaid && (
                            <ListGroup.Item>
                                {loadingPay && <Loading />}
                                {!sdkReady ? <Loading /> : (
                                    <PayPalButton 
                                        amount={orderItem.totalPrice}
                                        onSuccess={successPaymentHandler} 
                                    /> 
                                )}
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
            </Card>
        </Col>
    </Row>
) : null;
}

export default OrderScreen;
