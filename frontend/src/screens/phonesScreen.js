import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPhones } from '../redux/actions/phoneActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Helmet from '../components/Helmet';

const PhonesScreen = () => {
    const dispatch = useDispatch();
    const { allPhones, loading, error } = useSelector(state => state.allPhones);
    
    useEffect(() => {
        if (allPhones.length === 0) {
            dispatch(getAllPhones());
        }
    }, [dispatch, allPhones]);

    return (
    <>
        <Helmet title="Phones | ProShop" />
        <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
            {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please reload the webpage" /> : allPhones.map((phone) => {
                return(
                    <Col sm={12} md={6} lg={6} xl={4} key={phone._id}>
                        <Product product={phone} link={`/product`}/>
                    </Col>
                );
            })}
        </Row>
    </>
    )
}

export default PhonesScreen;
