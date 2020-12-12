import React, {useEffect} from 'react'
import Product from '../components/Product';
import { Col, Row, Spinner, Alert, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {getCarouselProducts} from '../redux/actions/productActions';
import {getTopTiersLaptop} from '../redux/actions/laptopActions';
import Message from '../components/Message';
import CarouselSection from '../components/Carousel';
import {Link} from 'react-router-dom';
import Helmet from '../components/Helmet';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { carouselProducts, loading: carouselLoading, error: carouselError } = useSelector(state => state.carouselProducts);
    const { topLaptops, loading: topLaptopLoading, error: topLaptopError } = useSelector(state => state.topLaptops);

    useEffect(() => {
        if (carouselProducts.length === 0) {
            dispatch(getCarouselProducts());
        }
    }, [dispatch, carouselProducts]);

    useEffect(() => {
        if (topLaptops.length === 0) {
            dispatch(getTopTiersLaptop());
        }
    }, [dispatch, topLaptops]);

    const checkIfErrorExisted = () => {
        if (topLaptopError) {
            return (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Something went wrong :(</Alert.Heading>
                    <p> {topLaptopError.message} </p>
                </Alert>
            );
        } else {
            return(
                <>
                <Helmet title="Welcome to Proshop" href="" />
                
                <CarouselSection carouselProducts={carouselProducts} loading={carouselLoading} error={carouselError} />
                
                <h1 style={{textDecoration: 'underline', fontFamily: 'Rokkitt'}}>Our Top Tiers MSI Laptops : </h1>
                <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                   { !topLaptopLoading ? topLaptops.length > 0 ? topLaptops.map((laptop) => {
                        return(
                            <Col sm={12} md={6} lg={6} xl={4} key={laptop._id}>
                               <Product product={laptop} link={`/laptops`}/>
                            </Col>
                        );
                    }) : (
                        <Message variant="danger" content="Something is wrong, please try to reload"/>
                    ) : <Spinner animation="border" size="lg" style={{ width: '100px', height: '100px' }} /> 
                   }
                </Row>
                <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/laptops">
                    <Button variant="outline-dark">See More</Button>
                </Link>
                </Row>

                </>
            )
        }
    }

    return(checkIfErrorExisted());
}

export default HomeScreen;
