import React, { useEffect } from 'react'
import { Row, Col, Pagination } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTVs } from '../redux/actions/tvActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Helmet from '../components/Helmet';

const TVScreen = () => {
    const dispatch = useDispatch();
    const { tvs, pages, page, loading, error } = useSelector(state => state.allTVs);
    
    useEffect(() => {
        if (tvs.length === 0) {
            dispatch(getAllTVs(0));
        }
    }, [dispatch, tvs]);

    const getNextSetOfReviews = (e, nextpage) => {
        e.preventDefault();
        dispatch(getAllTVs(nextpage-1));
    }

    return (
    <>
        <Helmet title="TVs | ProShop" />
        <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
            {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please reload the webpage" /> : tvs.map((tv) => {
                return(
                    <Col sm={12} md={6} lg={6} xl={4} key={tv._id}>
                        <Product product={tv} link={`/product`}/>
                    </Col>
                );
            })}
            {
                pages === 1 ? null : (
                    <Pagination>
                        { 
                            Array.from(Array(pages), (e , i) => {
                                return(<Pagination.Item key={i} onClick={(e) => getNextSetOfReviews(e, i+1)}>{i+1}</Pagination.Item>)
                            })
                        }
                    </Pagination>
                )
            }
        </Row>
    </>
    )
}

export default TVScreen;
