import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTVs } from '../redux/actions/tvActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Helmet from '../components/Helmet';

const TVScreen = () => {
    const dispatch = useDispatch();
    const { tvs, loading, error } = useSelector(state => state.allTVs);
    
    useEffect(() => {
        if (tvs.length === 0) {
            dispatch(getAllTVs());
        }
    }, [dispatch, tvs]);

    return (
    <>
        <Helmet title="TVs | ProShop" />
        <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
            {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please reload the webpage" /> : tvs.map((tv) => {
                return(
                    <Col sm={12} md={6} lg={6} xl={4} key={tv._id}>
                        <Product product={tv} link={`/laptops`}/>
                    </Col>
                );
            })}
        </Row>
    </>
    )
}

export default TVScreen;
