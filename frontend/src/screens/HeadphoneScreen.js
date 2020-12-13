import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHeadPhones } from '../redux/actions/headphoneActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Helmet from '../components/Helmet';

const HeadphonesScreen = () => {
    const dispatch = useDispatch();
    const { headPhones, loading, error } = useSelector(state => state.allHeadphone);
    
    useEffect(() => {
        if (headPhones.length === 0) {
            dispatch(getAllHeadPhones());
        }
    }, [dispatch, headPhones]);

    return (
    <>
        <Helmet title="Headphones | ProShop" />
        <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
            {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please reload the webpage" /> : headPhones.map((headphone) => {
                return(
                    <Col sm={12} md={6} lg={6} xl={4} key={headphone._id}>
                        <Product product={headphone} link={`/product`}/>
                    </Col>
                );
            })}
        </Row>
    </>
    )
}

export default HeadphonesScreen;
