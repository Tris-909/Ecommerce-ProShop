import React, {useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import {getProductsList} from '../redux/actions/productActions';
import Message from '../components/Message';
import Loading from '../components/Loading';
import Paginate from '../components/Paginate';

const SearchScreen = ({ match }) => {
    const keyword = match.params.keyword;   
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();
    
    const productsList = useSelector(state => state.productsList);
    const { products, page, pages, loading } = productsList;

    useEffect(() => {
        dispatch(getProductsList(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                { !loading ? products.length > 0 ? products.map((product) => {
                     return(
                         <Col sm={12} md={6} lg={6} xl={4} key={product._id}>
                            <Product product={product}/>
                         </Col>
                     );
                 }) : (
                     <Message variant="danger" content="Can't find your product, please try something else"/>
                 ) : <Loading /> 
                }
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />   
        </>
    )
}

export default SearchScreen;
