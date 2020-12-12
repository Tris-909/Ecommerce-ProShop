import React, {useEffect} from 'react'
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {getCarouselProducts} from '../redux/actions/productActions';
import {getTopTiersLaptop} from '../redux/actions/laptopActions';
import {getTopTVs} from '../redux/actions/tvActions';
import CarouselSection from '../components/Carousel';
import Helmet from '../components/Helmet';

import TopProduct from '../components/TopProduct (Home)/TopProduct';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { carouselProducts, loading: carouselLoading, error: carouselError } = useSelector(state => state.carouselProducts);
    const { topLaptops, loading: topLaptopLoading, error: topLaptopError } = useSelector(state => state.topLaptops);
    const { topTV, loading: topTVLoading } = useSelector(state => state.topTVs);

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

    useEffect(() => {
        if (topTV.length === 0) {
            dispatch(getTopTVs());
        }
    }, [dispatch, topTV]);

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
                    <Helmet title="Welcome to Proshop" href="/" />
                
                    <CarouselSection carouselProducts={carouselProducts} loading={carouselLoading} error={carouselError} />
                
                    <TopProduct 
                        loading={topLaptopLoading} 
                        itemArray={topLaptops} 
                        title="Our Top Tiers MSI Laptops :" 
                    />

                    <TopProduct 
                        loading={topTVLoading} 
                        itemArray={topTV} 
                        title="Best TVs for 2020 :" 
                    />
                </>
            )
        }
    }

    return(checkIfErrorExisted());
}

export default HomeScreen;
