import React, {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Helmet from '../components/Helmet';
import {getAllLaptops} from '../redux/actions/laptopActions';

const LaptopScreen = () => {
    const dispatch = useDispatch();
    const { laptops, loading, error } = useSelector(state => state.allLaptops);
    
    useEffect(() => {
        if (laptops.length === 0) {
            dispatch(getAllLaptops());
        }
    }, [dispatch, laptops]);

    return(
        <>
            <Helmet title="Laptops | ProShop" />
            <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please reload the webpage" /> : laptops.map((laptop) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={4} key={laptop._id}>
                            <Product product={laptop} link={`/laptops`}/>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default LaptopScreen;