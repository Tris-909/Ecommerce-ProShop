import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { getProductsList } from '../redux/actions/productActions';
import { deleteProductAsAdmin } from '../redux/actions/adminActions';
import {Link} from 'react-router-dom';
import { DELETE_PRODUCT_AS_ADMIN_RESET } from '../redux/actions/actionTypes';

const ProductListAdminScreen = ({ history }) => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.productsList);
    const { user } = useSelector(state => state.user);
    const { success } = useSelector(state => state.deleteProduct);

    useEffect(() => {
        if (user && user.isAdmin) {
            dispatch(getProductsList());
            dispatch({ type: DELETE_PRODUCT_AS_ADMIN_RESET });
        } else {
            history.push('/');
        }
        // eslint-disable-next-line
    }, [history, dispatch, success]);
    
    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this product ?')) {
            dispatch(deleteProductAsAdmin(id));
        }
    }

    return (
        <>
            <Row className="align-items-center">
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className="text-right">
                    <Link to='/admin/createProduct' className="btn btn-dark my-3" style={{ 'right': 0 }}>
                        + Create Product 
                    </Link>
                </Col>
            </Row>
            {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please try again" /> : (
                <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <LinkContainer to={`products/${product._id}/edit`}>
                                        <Button variant="light" className="btn-sm">
                                            <i className="fas fa-edit"></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(product._id)}>
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}   
        </>
    )
}

export default ProductListAdminScreen;
