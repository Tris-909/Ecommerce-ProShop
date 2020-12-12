import React, {useEffect} from 'react'
import Product from '../components/Product';
import { Col, Row, Spinner} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {getProductsList} from '../redux/actions/productActions';
import Message from '../components/Message';
import Paginate from '../components/Paginate';


const trash = ({ match }) => {
    const keyword = match.params.keyword;   
    const pageNumber = match.params.pageNumber || 1;
    const dispatch = useDispatch()
    const productsList = useSelector(state => state.productsList);
    const { products, page, pages, loading, error } = productsList;

    useEffect(() => {
        dispatch(getProductsList(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <h1>Products : </h1>
                <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                   { !loading ? products.length > 0 ? products.map((product) => {
                        return(
                            <Col sm={12} md={6} lg={6} xl={4} key={product._id}>
                               <Product product={product}/>
                            </Col>
                        );
                    }) : (
                        <Message variant="danger" content="Can't find your product, please try something else"/>
                    ) : <Spinner animation="border" size="lg" style={{ width: '100px', height: '100px' }} /> 
                   }
                </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />   
        </>
    )
}

export default trash
