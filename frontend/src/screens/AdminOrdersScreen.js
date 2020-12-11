import React, { useEffect } from 'react'
import { Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { getAllOrdersAsAdmin } from '../redux/actions/adminActions';

const AdminOrdersScreen = ({ history }) => {
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector(state => state.adminOrders);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        if (user && user.isAdmin) {
            dispatch(getAllOrdersAsAdmin());
        } else {
            history.push('/');
        }
        // eslint-disable-next-line
    }, [history, dispatch]);
    
    const direct = (id) => {
        history.push(`/orders/${id}`);
    }

    return (
        <>
            <Row className="align-items-center">
                <Col>
                    <h1>ORDERS</h1>
                </Col>
            </Row>
            {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please try again" /> : (
                <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USER ID</th>
                            <th>PRICE</th>
                            <th>IS PAID</th>
                            <th>IS DELIVERED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.map((order) => (
                            <tr key={order._id} onClick={() => direct(order._id)}>
                                <td>{order._id}</td>
                                <td>{order.user}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.isPaid ? <i className="fas fa-check" style={{color: 'green'}}></i> :  <i className='fas fa-times' style={{color: 'red'}}></i> }</td>
                                <td>{order.isDelivered ? <i className="fas fa-check" style={{color: 'green'}}></i> :  <i className='fas fa-times' style={{color: 'red'}}></i> }</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}   
        </>
    )
}

export default AdminOrdersScreen;
